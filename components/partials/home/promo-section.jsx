import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '@components/features/custom-link';

import { parallaxHandler } from '@utils';
import { fadeInLeftShorter } from '@utils/data/keyframes';

function CtaSection() {
    useEffect( () => {
        window.addEventListener( 'scroll', parallaxHandler, true );

        return () => {
            window.removeEventListener( 'scroll', parallaxHandler, true );
        }
    }, [] )

    return (
        <section className="banner banner-cta parallax mt-10" style={ { backgroundImage: `url(https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-suitcase-pink-fresh-blue-image_15222.jpg)`, backgroundColor: "#d1d1cf", padding: "60px" } }>
            <div className="container">
                <div className="banner-content">
                    {/* <Reveal keyframes={ fadeInLeftShorter } duration={ 1600 } delay={ 200 } triggerOnce> */ }
                    <h4 className="banner-subtitle ls-normal text-uppercase">Mid Season’s Sale</h4>
                    <h3 className="banner-title mb-0 text-white">Autumn Collection</h3>
                    <p className="text-white text-uppercase mb-6">Up To 20% Off</p>
                    <ALink href="/shop" className="btn btn-dark btn-rounded">Shop now<i
                        className="d-icon-arrow-right"></i></ALink>
                    {/* </Reveal> */ }
                </div>
            </div>
        </section>
    )
}

export default React.memo( CtaSection );