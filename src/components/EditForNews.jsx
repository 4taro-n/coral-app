import React,{useState, useEffect} from 'react';

// import './Editer.css';


import * as Api from './firebase/Api';
import NewsList from './NewsList';


function EditForNews() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');

    const [news, setNews] = useState([]);

    const handleTitle = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value);
    };

    const handleContent = (event) => {
        console.log(event.target.value);
        setContent(event.target.value);
    };

    const handleDate = (event) => {
        console.log(event.target.value);
        setDate(event.target.value);
    };

    // 取得したデータをstateで管理できるように格納
    const fetch = async() => {
        const data = await Api.getNews();
        await setNews(data);
        // await console.log(data[0].content);
    }

    // 起動時に発動
    useEffect (()=> {
        fetch();
    },[])

    // 追加ボタンを押された時の処理
    const post = async() => {
        await Api.addNews(title, content, date)
        await setTitle("");
        await setContent("");
        await setDate("");
        fetch();
    }

    return (
        <div className="edit-news-section">
            {/* date
            <input onChange={(event) => handleDate(event)} value={date} />
            title
            <input onChange={(event) => handleTitle(event)} value={title} />
            content
            <input onChange={(event) => handleContent(event)} value={content} />
            <button  type='button' onClick={() => post()}>追加</button>
            <NewsList list={news} fetch={fetch} /> */}

            <div className="edit-inputs">
                <div className="edit-label">
                    <label>日付</label>
                </div>
                <div className="edit-input">
                    <input onChange={(event) => handleDate(event)} value={date} />
                    <p>(例)2021/01/01</p>
                </div>
            </div>
            <div className="edit-inputs">
                <div className="edit-label">
                    <label>タイトル</label>
                </div>
                <div className="edit-input">
                    <input onChange={(event) => handleTitle(event)} value={title} />
                    <p>(例)休診のお知らせ</p>
                </div> 
            </div>
            <div className="edit-textarea-wrap">
                <div className="edit-textarea-label">
                    <label>内容</label>
                </div>
                <div className="edit-textarea">
                    <textarea onChange={(event) => handleContent(event)} value={content}></textarea>
                </div>
            </div>
            <div className="edit-btn" >
                <button type='button' onClick={() => post()}>追加</button>
            </div>
            <NewsList list={news} fetch={fetch} />
        </div>
    )
}

export default EditForNews;
