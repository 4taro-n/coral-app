import React from 'react';
import { Link } from 'react-router-dom';

import Coral_logo_svg from './logo/Coral_logo_svg';
import Dentistry_logo_svg from './logo//Dentistry_logo_svg';

import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-heading">
                <p>十分な説明、痛くない治療、優しく丁寧な診療を心がけています</p>
            </div>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Office Hours</h2>
                        {/* <p>月・火・水・金: <br/>9:00am ~ 12:00pm / 15:00pm ~ 19:00pm</p>
                        <p>木・土: <br/>9:00am ~ 12:00pm</p>
                        <p>日・祝日: <br />休診</p> */}
                        <p>8:30 ~ 12:00 15:00 ~ 19:30</p>
                        <p>休診：木・土午後、日・祝日</p>
                        
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <p>〒501-0236</p>
                        <p>岐阜県瑞穂市本田749-1</p>
                        <p>Tel: (058)-329-3456</p>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Quick Links</h2>
                        <Link to="/" className="footer-links-content">サイトTOP</Link>
                        <Link to="/NewsPage" className="footer-links-content">新着情報</Link>
                        <Link to="/ServicesPage" className="footer-links-content">診療案内</Link>
                        <Link to="/Recruit" className="footer-links-content">求人情報</Link>
                        {/* <Link to="/EditerPage" className="footer-links-content">管理者ページ</Link> */}
                        <Link to="/doctor-intro" className="footer-links-content">院長紹介</Link> 
                        <Link to="/EditerPage" className="footer-links-content">/</Link>
                    </div>
                </div>
            </div>
            {/* <div className='footer-link-wrapper'>
                
            </div> */}
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            <Coral_logo_svg ClassName="coral-logo-footer"/>
                        </Link>
                    </div>
                    <small className="website-rights">RYUTARO © 2021</small>
                </div>
            </section>      
        </div>
    );
}

export default Footer;
