// import React from "react";
import './Dashboard.css'
import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';



function Dashboar() {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];


    return (
        <div>
            <div className="container row1 row">
                <div className="col-2"></div>
                <div className="col-10">
                    <div className="search1" >

                    </div>
                    <div className="row">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-3 card1">
                                    <div className="iconic">
                                        <div>ic</div>
                                        <div>:</div>
                                    </div>
                                    <h4>FRONTEND</h4>
                                    <p><span className="m-2">trainees</span><span>45</span></p>
                                </div>
                                <div className="col-3 card1">
                                    <div className="iconic">
                                        <div>ic</div>
                                        <div>:</div>
                                    </div>
                                    <h4>BACKEND</h4>
                                    <p><span className="m-2">trainees</span><span>12</span></p>
                                </div>
                                <div className="col-3 card1">
                                    <div className="iconic">
                                        <div>ic</div>
                                        <div>:</div>
                                    </div>
                                    <h4>FULLSAC</h4>
                                    <p><span className="m-2">trainees</span><span>5</span></p>
                                </div>

                            </div>
                            <div>
                                <div style={{ width: '100%', height: 300 }}>
                                    <ResponsiveContainer>
                                        <PieChart>
                                            <Pie dataKey="value" data={data} fill="#8884d8" label />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboar