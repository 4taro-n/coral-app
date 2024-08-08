import React,{useCallback, useState, useEffect} from 'react';

import './OfficeHours.css';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import interactionPlugin, {DateClickArg} from '@fullcalendar/interaction';

import * as Api from '../components/firebase/Api';

function Calendar() {
    //クリックした箇所を識別する（日にちのデータ）
    const handleDateClick = useCallback((arg: DateClickArg) => {
        // alert(arg.dateStr);
        console.log(arg.dateStr);
    },[]);

    // firestoreからデータ取得
    const [plan, setPlan] = useState([]);

    // 取得したデータをstateで管理できるように格納
    const fetch = async() => {
        const data = await Api.getPlans();
        await console.log("This is calendar data:", data);
        await setPlan(data);
    }

    // 起動時に発動
    useEffect (() => {
        fetch();
    },[])

    return (
        <div className="calendar-section">
            <div className="calendar-position">
                <FullCalendar 
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                locale="ja"
                dateClick={handleDateClick}
                dayCellContent = {function(e) {
                    e.dayNumberText = e.dayNumberText.replace('日', '');
                }}
                // events={[
                //     {
                //     title  : 'event1',
                //     start  : '2021-11-10'
                //     },
                //     {
                //     title  : 'event2',
                //     start  : '2021-11-20',
                //     end    : '2021-11-22'
                //     }
                // ]}

                events={plan}


                className="Calendar"
                />
            </div>
        </div>
    )
}

export default Calendar;
