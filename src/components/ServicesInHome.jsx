import React from 'react';
import {Link} from 'react-router-dom';

import './ServicesInHome.css';
import CerecInHome from './CerecInHome';


function ServicesInHome() {
    return (
        <div className="services-home-section" id="services">
            <div className="services-home-heading">
                <h1>私たちにできること</h1>
            </div>
            
            <div className="services-home-links">
                <Link to="/ServicesPage" className="services-link">
                    <div className="services-link-i">
                        <i class="fas fa-tooth"></i>
                    </div>
                    <div className="services-link-text">
                        一般歯科
                    </div>
                </Link>
                <Link to="/ServicesPage" className="services-link">
                    <div className="services-link-i">
                        <i class="far fa-grimace"></i>
                        {/* <i class="fas fa-grimace"></i> */}
                    </div>
                    <div className="services-link-text">
                        小児歯科・一般矯正
                    </div>
                </Link>
                <Link to="/ServicesPage" className="services-link">
                    <div className="services-link-i">
                        <i class="fas fa-magic"></i>
                        {/* <i class="fas fa-shield-alt"></i> */}
                    </div>
                    <div className="services-link-text">
                        ホワイトニング
                    </div>
                </Link>
                <Link to="/ServicesPage" className="services-link">
                    <div className="services-link-i">
                        <i class="fas fa-teeth"></i>
                        {/* <i class="fas fa-teeth-open"></i> */}
                    </div>
                    <div className="services-link-text">
                        インプラント
                    </div>
                </Link>
            </div>
            <CerecInHome />
        </div>
    )
}

export default ServicesInHome;
