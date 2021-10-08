import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '@components/features/custom-link';
import OwlCarousel from '@components/features/owl-carousel';

import { introSlider } from '@utils/data/carousel';
import { fadeInRightShorter } from '@utils/data/keyframes';

function IntroSection() {
    return (
       <>
		<OwlCarousel adClass="intro-slider animation-slider owl-dot-inner owl-nav-big owl-theme" options={ introSlider }>
            <div className="intro-slide1 banner banner-fixed" style={ { backgroundColor: "#f0f0f0" } }>
                <figure>
                    <LazyLoadImage
                        src="https://traworldluggage.com/img/banner-05.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height={ 469 }
                    />
                </figure>
                <div className="container">
                    <div className="banner-content ml-lg-2 y-50">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration={ 800 }>
                            <h4 className="banner-subtitle text-uppercase">Performance &amp; Lifestyle</h4>
                            <h3 className="banner-title ls-m text-dark font-weight-bolder">
                                <span className="font-weight-bold text-primary ls-s">Introducing</span><br />Fashion Lifestyle<br />Collection
                            </h3>
                            <ALink href="/shop" className="btn btn-dark btn-outline btn-rounded mb-1">Shop now <i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="intro-slide2 banner banner-fixed" style={ { backgroundColor: "#ececf3" } }>
                <figure>
                    <LazyLoadImage
                        src="https://cdn.shopify.com/s/files/1/0080/0984/2786/files/CARRY_ON_AND_PERONAL_ITEMS_3d18eeea-773a-407c-b0b3-2b7ff2afe4c1.jpg?v=1619129958"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height={ 469 }
                    />
                </figure>
                <div className="container">
                    <div className="banner-content ml-auto y-50 mr-0">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration={ 800 }>
                            <h4 className="banner-subtitle text-uppercase text-primary">Professional</h4>
                            <h3 className="banner-title ls-s font-weight-bold">Pulseira Inteligente <br />Smart Band 5</h3>
                            <ALink href="/shop" className="btn btn-dark btn-outline btn-rounded mb-1">Shop now <i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
			</OwlCarousel>
			</>
     
    )
}

export default React.memo( IntroSection );