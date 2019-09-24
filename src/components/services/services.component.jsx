import React from 'react';

import Wallpaper from './../../assets/services/wallpaper.png';
import PaintRoller from './../../assets/services/paint-roller.png';
import PaintBucket from './../../assets/services/paint-bucket.png';

import './services.style.scss';


const Services = ()=>(
    <div id="services">
        <div className="container">
            <div className="services-heading">
                <h2 className="title">What we do.</h2>
                <p className="subtitle">With over 15 years experience and real focus on customer satisfaction, you can rely on us for your next renovation,
driveway sett or home repair. We provide a professional service for private and commercial customers.
</p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="service">
                        <div className="service-header">
                            <div className="heading-image">
                                <img src={`${PaintBucket}`}  alt=""/>
                            </div>
                            <h4>GAIN NEW CUSTOMERS</h4>
                        </div>
                        <p> Our websites are designed for painters
                        and painting contractors to get their ideal
                        customers to contact them for a quote.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service">
                        <div className="service-header">
                        <div className="heading-image">
                                <img src={`${PaintRoller}`} alt=""/>
                            </div>
                            <h4>GET FOUND ONLINE.</h4>
                        </div>
                        <p> Your website will be easy to find
                             on any device or search engine and 
                             will be mobile-friendly and 
                             search engine optimized.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service">
                        <div className="service-header">
                            <div className="heading-image">
                                <img src={`${Wallpaper}`}  alt=""/>
                            </div>
                            <h4>ENHANCE YOUR IMAGE.</h4>
                        </div>
                        <p>Make a great impression on potential customers with 
                            your professional, modern website.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Services;