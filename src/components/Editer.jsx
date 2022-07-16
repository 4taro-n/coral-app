import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import './Editer.css';

import EditForNews from './EditForNews';
import EditForCalendar from './EditForCalendar';

const Editer = () => {
    const [selected, setSelected] = useState(true);

    return (
        <div>
            <div className="edit-header">
                <Link to="/" className="edit-header-Link">
                    <button>ホーム</button>
                </Link>
        
                <button onClick={()=> setSelected(true)}>新着情報</button>
                <button onClick={()=> setSelected(false)}>カレンダー</button>
            </div>

            {selected ? (<EditForNews />):(<EditForCalendar />)}

            {/* <EditForNews />
            <EditForCalendar /> */}
        </div>
    )
}

export default Editer;
