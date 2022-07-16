import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './SubPageTop.css';

const SubPageTop = ({subheading, heading, background_class,page_name}) =>  {
    // const [test,setTest] = useState();

    // useEffect (async()=> {
    //     await setTest({Testtrue});
    //     await console.log(test);
    // },[])
    
    return (
        <div className="subpage-section">
            <div className="subpage-section-first">
                <div className="subpage-heading">
                    <p>{subheading}</p>
                    <h1>{heading}</h1>
                </div>
            </div>
            <div className="subpage-contents">
                <div className="subpage-harf-box"></div>
                <div className={background_class}></div>
            </div>
            <div className="subpage-link">
                <Link to="/" className="subpage-link-home">トップ</Link>
                <i class="fas fa-angle-right"></i>
                <div>{page_name}</div>
            </div>
        </div>
    )
}

export default SubPageTop;
