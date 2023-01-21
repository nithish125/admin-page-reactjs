// import React from "react";
import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, BarChart, Bar, Sector, Cell, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';
import './Rainee.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Login from './Logins';
import Logins from './Logins';
import User from '../users/User';
import Heading from './Heading';
import Char from '../chars/Char';
import Course from '../course/Course';
function Rainee() {
    var avin = [{
        names: "kavin",
        mobile: "9345335073",
        dob: "06/03/2000",
        course: "fulsack",
        doj: "07/05/2022",
        locations: "sankarankovil",
        branch: "chennai",
        proect: [{ tite: "hohuuh", lins: "yhyhyhyyyhyh", topic: "1" }, { tite: "gbgbgbgg", lins: "gg", topic: "2" }, { tite: "huhuh", lins: "hyhy", topic: "1" }, { tite: "hyhyh", lins: "yhyh", topic: "2" }, { tite: "1", lins: "hyhyy", topic: "yhyhyhy" }],
        wpm: [{ days: "", speed: 23 }, { days: "", speed: 23 }, { days: "", speed: 23 }, { days: "", speed: 23 }, { days: "", speed: 23 }, { days: "", speed: 23 }, { days: "", speed: 23 }],
        apptitude: [2, 7, 8, 5, 9, 5, 7],
        gramers: [4, 8, 9, 6, 5],
        couesess: [[], [], [], []],
        msgs: [], 
        notifications: [],
        batch: "FED-10"


    }]
    const data1 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (<div >

<div><Heading /></div>
        <div className="dashboard row">
            <div className="col-2  text-center"><User /></div>
            <div className="col-10 bg-secondary">
                <div className="innerdash row">
                    <div className="col-8 bg-dark ">
                        <Char />
                        <Course />
                        <div className="row">
                            <div className="col-4 bg-dark">1course</div>
                            <div className="col-4 bg-warning">assesmen
                                <div className="row">
                                    <div className="col-6 text-center"><div class="spin">90</div>
                                        <div>appiue</div></div>
                                    <div className="col-6 "><div class="spin">80</div>
                                        <div>english</div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-4 bg-danger">1</div>

                        </div>
                        <div className="wpm  p-5">
                            <div>
                                <div style={{ width: '100%', height: 300 }}>
                                <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>

                                </div>
                            </div>
                            words per minie
                        </div>
                        <div className="row">
                            <div className="col-6 p-5 bg-dark">gilink
                                <div className="gilink">
                                    {
                                    avin[0].proect.map((links)=>(
                                    <div>
                                        <p>{links.tite}</p>
                                        <a>{links.lins}</a>
                                    </div>))
                                    }
                                    {/* <div>
                                        <p>opic</p>
                                        <a>link</a>
                                    </div>
                                    <div>
                                        <p>opic</p>
                                        <a>link</a>
                                    </div> */}

                                </div>
                            </div>
                            <div className="col-6 p-5 bg-secodary">
                                <div style={{ width: '100%', height: 300 }}>
                                    <ResponsiveContainer>
                                        <PieChart>
                                            <Pie dataKey="value" data={data1} fill="orange" label />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>

                            </div>

                        </div>
                        <div className='courses'>
                            <div className='row'>
                                <div className='col-3 anays'>
                                    <div className='anays1'>
                                        <CircularProgressbar
                                            value={87}
                                            text={`${87}%`}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                strokeLinecap: 'butt',
                                                textSize: '16px',
                                                pathTransitionDuration: 0.5,
                                                pathColor: `rgba(62, 152, 200, ${87 / 100})`,
                                                textColor: '#f88',
                                                trailColor: '#d6d6d6',
                                                backgroundColor: '#3e98c7',
                                            })}
                                        />;
                                    </div>
                                </div>
                                <div className='col-3 anays'>
                                    <div className='anays1'>
                                        <CircularProgressbar
                                            value={70}
                                            text={`${70}%`}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                strokeLinecap: 'butt',
                                                textSize: '16px',
                                                pathTransitionDuration: 0.5,
                                                pathColor: `rgba(62, 152, 200, ${87 / 100})`,
                                                textColor: '#f88',
                                                trailColor: '#d6d6d6',
                                                backgroundColor: '#3e98c7',
                                            })}
                                        />;
                                    </div>
                                </div>
                                <div className='col-3 anays'>
                                    <div className='anays1'>
                                        <CircularProgressbar
                                            value={78}
                                            text={`${78}%`}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                strokeLinecap: 'butt',
                                                textSize: '16px',
                                                pathTransitionDuration: 0.5,
                                                pathColor: `rgba(62, 152, 200, ${87 / 100})`,
                                                textColor: '#f88',
                                                trailColor: '#d6d6d6',
                                                backgroundColor: '#3e98c7',
                                            })}
                                        />;
                                    </div>
                                </div>
                                <div className='col-3 anays'>
                                    <div className='anays1'>
                                        <CircularProgressbar
                                            value={56}
                                            text={`${56}%`}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                strokeLinecap: 'butt',
                                                textSize: '16px',
                                                pathTransitionDuration: 0.5,
                                                pathColor: `rgba(62, 152, 200, ${87 / 100})`,
                                                textColor: '#f88',
                                                trailColor: '#d6d6d6',
                                                backgroundColor: '#3e98c7',
                                            })}
                                        />;
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-4 bg-dark ">9
                        {/* <Logins /> */}

                    </div>
                </div>
            </div>
        </div>
    </div>)

}
export default Rainee