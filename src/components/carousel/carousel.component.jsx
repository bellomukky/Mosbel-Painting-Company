import React from 'react';

import './carousel.style.scss';

import Painting  from './../../assets/carousel-images/painting.jpg';
import Paint  from './../../assets/carousel-images/paint.jpg';
import Wallpaper from './../../assets/carousel-images/wallpaper.jpg';


const Carousel = ()=>(
    <div id="carousel">
        <div id="mosbelCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" style={{background:`url(${Painting})`}}>
                   <div className="carousel-image">
                        <div className="carousel-caption">
                           <h1 class="titleName">Exquisite Exterior and Interior Paints.</h1>
                           <h4 className="subtitle">We sell exterior and interior paints, to bring your home to your dream.</h4>
                           <a href="javascript:void(0)" className="btn btn-quote">Request a Quote</a>
                        </div>
                   </div>
                </div>
                <div className="carousel-item" style={{background:`url(${Paint})`}}>
                    <div className="carousel-image" >
                        <div className="carousel-caption">
                        <h1 className="title">Fascinating 3D Wallpapers for your homes.</h1>
                        <h4 className="subtitle">We sell unique and fresh 3D wallpers to lighten up your
                        bedrooms, Living rooms and offices.</h4>
                        <a href="javascript:void(0)" className="btn btn-quote">Request a Quote</a>
                        
                        </div>
                    </div>
                </div>
                <div className="carousel-item" style={{background:`url(${Wallpaper})`}}>
                <div className="carousel-image" >
                        <div className="carousel-caption">
                            <h1 className="title">Profession Painters and Wallpaper Installers.</h1>
                            <h4>We offer painting and wallpaper installation services to 
                                help maintain and beautify your property.</h4>
                            <a href="javascript:void(0)" className="btn btn-quote">Request a Quote</a>
                           
                        </div>
                   </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#mosbelCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#mosbelCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
)

export default Carousel;