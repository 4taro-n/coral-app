import React from 'react';
import * as Api from './firebase/Api';


const CalendarList = (props) => {
    //取得したidをdeleteCalendarに入れて実行する
    const deletePlanHandle = async(id) => {
        await Api.deletePlans(id);
        props.fetch();
    }

    const planList = props.planslist.map((data) => {
        return (
            // <li key={data.createdAt}>{data.title},{data.start}<button type="button" onClick={() => deletePlanHandle(data.id)}>削除</button></li>
            <li  key={data.createdAt} className="calendar-list">
                <div className="calendar-list-date">
                    {data.start}
                </div>
                <div className="calendar-list-title">
                    {data.title}
                </div>
                <button className="calendar-list-del-btn" type="button" onClick={() => deletePlanHandle(data.id)}>削除</button>
            </li>
        )
    });
    return (
        <div className="calendar-list-wrap">
            <ul>{planList}</ul>
        </div>
    )
}

export default CalendarList;
