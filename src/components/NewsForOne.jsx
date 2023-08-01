import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import * as Api from './firebase/Api';

import './News.css';

const NewsForOne = () => {
    // パラメーターを取得
    const {id} = useParams();
    const [newsone, setNewsone] = useState([]);

    // 取得したデータをstateで管理できるように格納
    const fetchone = async(id) => {
        const data = await Api.getOneNews(id);
        await setNewsone(data);
    }

    // 起動時に発動
    useEffect (() => {
        fetchone(id);
    },[])

    return (
        <div className="newsForOne-section">
            <div className="news-list">
                <div className="news-list-top">
                    <div className="news-list-date">{newsone.date}</div>
                    <div className="news-list-title">{newsone.title}</div>
                </div>
                <div className="news-list-content">{newsone.content}</div>
            </div>      
        </div>
    )
}

export default NewsForOne;
