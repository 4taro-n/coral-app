import React, {useState} from 'react';
import * as Api from './firebase/Api';

import './News.css';
// import './NewsList.css';

const NewsList =(props)=> {
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({ date: '', title: '', content: '' });

    const startEdit = (data) => {
        setIsEditing(true);
        setEditData({ date: data.date, title: data.title, content: data.content });
        setEditingId(data.id);
        console.log(editData)
    };

    // 取得したidをdeleteNewsに入れて実行する
    const deleteHandle = async(id) => {
        await Api.deleteNews(id);
        props.fetch();
    }
    const updateHandle = async(id) => {
        await Api.updateNews(id, editData.title, editData.content, editData.date);
        props.fetch();
        setIsEditing(false);
        setEditingId(null); // 編集中の投稿IDをクリア
    }
    // データベースから取得したデータをリストタグに格納+ループで全てのデータを表示させる
    const newsList = props.list.map((data) => {
        // return (
        //     <li className="news-list" key={data.createdAt}>
        //         <div className="news-list-top">
        //             <div className="news-list-date">{data.date}</div>
        //             <div className="news-list-group">
        //                 <div className="news-list-title">{data.title}</div>
        //                 {/* <button className="news-list-btn" type='button' onClick={() => deleteHandle(data.id)}>削除</button> */}
        //                  <button className="news-list-btn" type='button' onClick={updateHandle}>編集</button>
        //             </div>
        //         </div>
        //         <div className="news-list-content">{data.content}</div>
        //    </li>
        // )
        if (isEditing && editingId === data.id) {
            return (
                <li className="news-list" key={data.createdAt}>
                    <div className="news-list-top">
                        <input type="text" value={editData.date} onChange={(e) => setEditData({ ...editData, date: e.target.value })} />
                        <div className="news-list-group">
                            <input lassName="news-list-title" type="text" value={editData.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })} />
                        </div>
                    </div>
                    <textarea className="news-edit-text-container" value={editData.content} onChange={(e) => setEditData({ ...editData, content: e.target.value })} />
                    <div className="news-list-edit-btns">
                        <button onClick={()=> updateHandle(editingId)}>保存</button>
                        <button onClick={() => setIsEditing(false)}>キャンセル</button>
                    </div>
                </li>
            );
        } else {
            return (
                <li className="news-list" key={data.createdAt}>
                    <div className="news-list-top">
                        <div className="news-list-date">{data.date}</div>
                        <div className="news-list-group">
                            <div className="news-list-title">{data.title}</div>
                            <div className="news-list-btn-container">
                                <button className="news-list-btn-edit" type='button' onClick={() => startEdit(data)}>編集</button>
                                <button className="news-list-btn-delete" type='button' onClick={() => deleteHandle(data.id)}>削除</button>
                            </div>
                        </div>
                    </div>
                    <div className="news-list-content">{data.content}</div>
                </li>
            )
        }
        
    });

    return (
        <div>
            <ul className="news-lists">{newsList}</ul>
        </div>
    )
}

export default NewsList;
