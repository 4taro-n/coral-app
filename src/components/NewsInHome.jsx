import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './NewsInHome.css';

import * as Api from './firebase/Api';


function NewsInHome() {
    const [news, setNews] = useState([]);

    // 取得したデータをstateで管理できるように格納
    const fetch = async() => {
        const data = await Api.getNews();
        await setNews(data);
    }

    // 起動時に発動
    useEffect (() => {
        fetch();
    },[])

    const newsList = news.map((data) => {
        return (
            <li key={data.createdAt} className="news-home-contents-li">
                <Link to={"./NewsPage/" + data.id} className="news-home-links">
                    <div className="news-home-date">
                        {data.date}
                    </div>
                    <div className="news-home-content">
                        {data.title}
                    </div>
                </Link>
            </li>
        )
    })
    return (
        <div className="news-home-section" id="news">
            <div className="news-home-heading">
                <h1>新着情報</h1>
            </div>
            <div className="news-home-contents">
                <Link to="/NewsPage" className="news-home-btn">
                    <span>
                        more
                        <i class="fas fa-arrow-right"></i>
                    </span>
                </Link>
                <ul className="news-home-contents-ul">{newsList}</ul>
            </div>    
        </div>
    )
}

export default NewsInHome;
