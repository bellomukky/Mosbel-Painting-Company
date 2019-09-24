import React from 'react';
import './topnav.style.scss';
import { FaMobileAlt,FaRegEnvelope,FaFacebook,FaLinkedin,FaInstagram,FaTwitter } from "react-icons/fa";

const TopNav = ()=>(
    <div id="topnav" className="d-none d-md-block">
        <div className="topnav-container">
            <div className="">
                <div className='row'>
                    <div className="col-6 col-md-5 left-col">
                        <ul>
                            <li>
                                <FaMobileAlt className="icon" />
                                <span className="phone-label">Contact Phone:</span>
                                08144314547, 08136327341
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-7 right-col">
                        <ul>
                            <li><a href="/"><FaRegEnvelope className='icon' />bellom962@gmail.com</a></li>
                            <li><a href="/"><FaFacebook className='icon facebook' /></a></li>
                            <li><a href="/"><FaInstagram className='icon instagram' /></a></li>
                            <li><a href="/"><FaLinkedin className='icon linkedin' /></a></li>
                            <li><a href="/"><FaTwitter className='icon twitter' /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default TopNav;