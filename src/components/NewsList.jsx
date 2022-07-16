import React from 'react';
import * as Api from './firebase/Api';

import './News.css';
// import './NewsList.css';

const NewsList =(props)=> {
    // 取得したidをdeleteNewsに入れて実行する
    const deleteHandle = async(id) => {
        await Api.deleteNews(id);
        props.fetch();
    }
    // データベースから取得したデータをリストタグに格納+ループで全てのデータを表示させる
    const newsList = props.list.map((data) => {
        return (
            <li className="news-list" key={data.createdAt}>
                <div className="news-list-top">
                    <div className="news-list-date">{data.date}</div>
                    <div className="news-list-group">
                        <div className="news-list-title">{data.title}</div>
                        <button className="news-list-btn" type='button' onClick={() => deleteHandle(data.id)}>削除</button>
                    </div>
                </div>
                <div className="news-list-content">{data.content}</div>
            </li>
        )
    });

    return (
        <div>
            <ul className="news-lists">{newsList}</ul>
        </div>
    )
}

export default NewsList;
