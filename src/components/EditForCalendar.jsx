import React,{useState, useEffect} from 'react';

import './Editer.css';

import * as Api from './firebase/Api';
import CalendarList from './CalendarList';
import Calendar from './Calendar';

function EditForCalendar() {
    // 要素をデータベースに追加するための変数
    const [caltitle, setCaltitle] = useState('');
    const [start, setStart] = useState('');

    const [plans, setPlans] = useState([]);

    // 入力された値を変数に格納
    const handleCaltitle = (event) => {
        console.log(event.target.value);
        setCaltitle(event.target.value);
    }

    const handleStart = (event) => {
        console.log(event.target.value);
        setStart(event.target.value);
    }

    //追加ボタンを押された時の処理
    const postCal = async() => {
        await Api.addPlans(caltitle, start)
        await setCaltitle('')
        await setStart('')
        fetch();
    }

    const fetch = async() => {
        const data = await Api.getPlans();
        await setPlans(data);
    }

    useEffect (()=> {
        fetch();
    },[])
    return (
        <div className="edit-calendar-section">
            {/* title
            <input onChange={(event) => handleCaltitle(event)} value={caltitle} />
            start
            <input onChange={(event) => handleStart(event)} value={start} />
            <button  type='button' onClick={() => postCal()}>追加</button> */}

            <div className="edit-inputs">
                <div className="edit-label">
                    <label>日付</label>
                </div>
                <div className="edit-input">
                <input onChange={(event) => handleStart(event)} value={start} />
                    <p>(例)2021-01-01</p>
                </div>
            </div>
            <div className="edit-inputs">
                <div className="edit-label">
                    <label>予定</label>
                </div>
                <div className="edit-input">
                    <input onChange={(event) => handleCaltitle(event)} value={caltitle} />
                    <p>(例)休診</p>
                </div>
            </div>
            <div className="edit-btn" >
                <button  type='button' onClick={() => postCal()}>追加</button>
            </div>
            <CalendarList planslist={plans} fetch={fetch}/>
            <Calendar />
            <div className="cal-margin"></div>
        </div>
    )
}

export default EditForCalendar;
