import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';

import './Navbar.css';

import Coral_logo_svg from './logo/Coral_logo_svg';

const Navbar = ({link_scroll}) => {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        }else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <Coral_logo_svg ClassName="coral_logo"/>
                </Link>

                <div className="nav-margin"></div>

                {/* メニューバーアイコンの切り替え */}
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={click ? 'nav-menu back' : 'nav-menu'}>
                    <li>
                        {link_scroll ? 
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            サイトTOP
                        </Link>:
                        <Scroll to="top-page" className="nav-links" onClick={closeMobileMenu} smooth={true}>
                            サイトTOP
                        </Scroll>}

                    </li>
                    <li>
                        {link_scroll ?
                        <Link to="/NewsPage" className="nav-links" onClick={closeMobileMenu}>
                            新着情報
                        </Link>:
                        <Scroll to="news" className="nav-links" onClick={closeMobileMenu} smooth={true}>
                            新着情報
                        </Scroll>}
                    </li>
                    <li>
                        {link_scroll ?
                        <Link to="/ServicesPage" className="nav-links" onClick={closeMobileMenu}>
                            診療案内
                        </Link> :
                        <Scroll to="services" className="nav-links" onClick={closeMobileMenu} smooth={true}>
                            診療案内
                        </Scroll>}
                    </li>
                    <li>
                        {link_scroll ? 
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            診療時間
                        </Link>:
                        <Scroll to="office-hours" className="nav-links" onClick={closeMobileMenu} smooth={true}>
                            診療時間
                        </Scroll>}
                    </li>
                    {/* <li>
                        <Scroll to="" className="nav-links" onClick={closeMobileMenu} smooth={true}>
                            感染対策
                        </Scroll>
                    </li> */}
                    <li>
                        {link_scroll ? 
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            アクセス
                        </Link>:
                        <Scroll to="access" className="nav-links" onClick={closeMobileMenu} smooth={true}>
                            アクセス
                        </Scroll>}
                    </li>
                    <li>
                        <Link to="/Recruit" className="nav-links" onClick={closeMobileMenu}>
                            求人情報
                        </Link>
                    </li>
            
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
