import React from 'react';

import './OfficeHours.css';

import Calendar from './Calendar';



function OfficeHours() {
    return (
        <div className="office-hours-section" id="office-hours">
            <div className="office-hours-heading">
                <h1>診療時間</h1>
            </div>
            {/* <table>
                <tbody>
                    <tr className="bg-pink">
                        <th>診療時間</th>
                        <th>月</th>
                        <th>火</th>
                        <th>水</th>
                        <th>木</th>
                        <th>金</th>
                        <th>土</th>
                        <th>日・祝</th>
                    </tr>
                    <tr>
                        <th className="bg-pink">9:00 ~ 12:00</th>
                        <th>●</th>
                        <th>●</th>
                        <th>●</th>
                        <th>●</th>
                        <th>●</th>
                        <th>●</th>
                        <th>/</th>  
                    </tr>
                    <tr>
                        <th className="bg-pink">15:00 ~ 19:00</th>
                        <th>●</th>
                        <th>●</th>
                        <th>●</th>
                        <th>/</th>
                        <th>●</th>
                        <th>/</th>
                        <th>/</th>  
                    </tr>
                </tbody>
            </table> */}
            <div className="office-hours-table">
                <table>
                    <thead>
                        <tr>
                        <th>診療時間</th>
                        <th>月</th>
                        <th>火</th>
                        <th>水</th>
                        <th>木</th>
                        <th>金</th>
                        <th>土</th>
                        <th>日・祝日</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th>8:30 ~ 12:00</th>
                        <td>●</td>
                        <td>●</td>
                        <td>●</td>
                        <td>●</td>
                        <td>●</td>
                        {/* <td><div className="dot"></div></td>
                        <td><div className="dot"></div></td>
                        <td><div className="dot"></div></td>
                        <td><div className="dot"></div></td>
                        <td><div className="dot"></div></td> */}
                        <td>●</td>
                        {/* <td><div className="triangle"></div></td> */}
                        <td>/</td>
                        </tr>
                        <tr>
                        <th>15:00 ~ 19:30</th>
                        <td>●</td>
                        <td>●</td>
                        <td>●</td>
                        {/* <td><div className="dot"></div></td>
                        <td><div className="dot"></div></td>
                        <td><div className="dot"></div></td> */}
                        <td>/</td>
                        <td>●</td>
                        {/* <td><div className="dot"></div></td> */}
                        <td>/</td>
                        <td>/</td>
                        </tr>
                    </tbody>
                </table>
                {/* <div calssName="office-hours-notice">▲は午前８時からの診療となります</div> */}
            </div>
            <Calendar />
            
        </div>
    )
}

export default OfficeHours;
