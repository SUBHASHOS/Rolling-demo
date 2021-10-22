import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'
import Helmet from 'react-helmet';
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductView } from '@components/product'

import MediaOne from '@components/partials/product/media/media-one';
import DetailThree from '@components/partials/product/detail/detail-three';

export async function getStaticProps({
  params,
  locale,
  locales,
  preview,
}: GetStaticPropsContext<{ slug: string }>) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const productPromise = commerce.getProduct({
    variables: { slug: params!.slug },
    config,
    preview,
  })

  const allProductsPromise = commerce.getAllProducts({
    variables: { first: 4 },
    config,
    preview,
  })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise
  const { product } = await productPromise
  const { products: relatedProducts } = await allProductsPromise

  if (!product) {
    throw new Error(`Product with slug '${params!.slug}' not found`)
  }

  return {
    props: {
      pages,
      product,
      relatedProducts,
      categories,
    },
    revalidate: 200,
  }
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const { products } = await commerce.getAllProductPaths()

  return {
    paths: locales
      ? locales.reduce<string[]>((arr, locale) => {
          // Add a product path for every locale
          products.forEach((product: any) => {
            arr.push(`/${locale}/product${product.path}`)
          })
          return arr
        }, [])
      : products.map((product: any) => `/product${product.path}`),
    fallback: 'blocking',
  }
}

export default function Slug({
  product,
  relatedProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const loaded = true;

  return router.isFallback ? (
    <h1>Loading...</h1>
  ) : (
    <>
    <div className={ `page-content mb-10 ${ loaded ? '' : 'd-none' }` }>
                        <div className="container skeleton-body">
                            <div className="product product-single row mb-8">
                                <div className="col-md-6">
                                    {/* <MediaOne product={ product } adClass='pb-0' /> */}
                                </div>

                                <div className="col-md-6">
                                    <DetailThree product={ product } />
                                </div>
                            </div>

                            {/* <DescOne product={ product } isShipping={ true } isGuide={ false } />

                            <RelatedProducts products={ related } adClass="pb-6 pt-10 mt-6" /> */}
                        </div>
                    </div>

    <ProductView product={product} relatedProducts={relatedProducts} />
    </>
  )
}

Slug.Layout = Layout
