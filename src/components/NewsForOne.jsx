import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import * as Api from './firebase/Api';

import './NewsForOne.css';

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
        <div>
            <p>{id}</p>
            <p>{newsone.title}</p>
            <p>{newsone.content}</p>
            <p>{newsone.date}</p>
            
        </div>
    )
}

export default NewsForOne;
