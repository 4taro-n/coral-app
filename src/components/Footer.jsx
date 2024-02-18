import React from 'react';
import { Link } from 'react-router-dom';

import Coral_logo_svg from './logo/Coral_logo_svg';
import Dentistry_logo_svg from './logo//Dentistry_logo_svg';

import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            {/* <div className="footer-heading">
                <p>十分な説明、痛くない治療、優しく丁寧な診療を心がけています</p>
            </div>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Office Hours</h2>
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
                        <Link to="/doctor-intro" className="footer-links-content">院長紹介</Link> 
                        <Link to="/EditerPage" className="footer-links-content">/</Link>
                    </div>
                </div>
            </div> */}

            <div className="footer-modal">
                <div className="footer-modal-contents-container">
                    <div className="footer-logo">
                        <Link to="/" className="footer-social-logo">
                            <Coral_logo_svg ClassName="logo-footer-coral"/>
                        </Link>
                        <div className="footer-address-box">
                            <p>〒501-0236 岐阜県瑞穂市本田749-1</p>
                            <a href="https://www.google.co.jp/maps/place/コーラルクリニック/@35.411014,136.6700993,20.63z/data=!4m5!3m4!1s0x6003adf4ef974279:0x434f072da25cc8f6!8m2!3d35.4094072!4d136.6736578?hl=ja" target="_blank" rel="noopener noreferrer" className="access-googlemap-link">
                                アクセスマップ
                            </a>
                        </div>
                        <div className="phone-contents">
                            <i class="fas fa-phone"></i>
                            058-329-3456
                        </div>
                    </div>
                </div>
                <div className="footer-modal-timetable-container">
                    <div className="footer-table-box">
                        <table className="footer-table">
                            <thead>
                                <tr>
                                <th>診療時間</th>
                                <th>月</th>
                                <th>火</th>
                                <th>水</th>
                                <th>木</th>
                                <th>金</th>
                                <th>土</th>
                                <th>日</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th>8:30 ~ 12:00</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>-</td>
                                </tr>
                                <tr>
                                <th>15:00 ~ 19:30</th>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>-</td>
                                <td>●</td>
                                <td>-</td>
                                <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            
            <section className="social-media">
                <div className="social-media-wrap">
                    {/* <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            <Coral_logo_svg ClassName="coral-logo-footer"/>
                        </Link>
                    </div> */}
                    <Link to="/EditerPage" className="website-rights">RYUTARO © 2021</Link>
                    {/* <small className="website-rights">RYUTARO © 2021</small> */}
                </div>
            </section>      
        </div>
    );
}

export default Footer;
