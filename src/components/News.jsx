import React,{useState, useEffect} from 'react';

import './News.css';

import * as Api from '../components/firebase/Api';

const News = () => {
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
            <li className="news-list" key={data.createdAt}>
                <div className="news-list-top">
                    <div className="news-list-date">{data.date}</div>
                    <div className="news-list-title">{data.title}</div>
                </div>
                <div className="news-list-content">{data.content}</div>
            </li>
        )
    })
    return (
        <div className="news-section" id="news">
            NewsInHomeです
            <ul className="news-lists">{newsList}</ul>
            
        </div>
    )
}

export default News;
