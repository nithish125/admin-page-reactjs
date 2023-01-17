// import React from "react";
import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend,BarChart, Bar,  Sector, Cell, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';
import './Rainee.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Rainee() {
    var avin=[{
        names:"kavin",
        mobile:"9345335073",
        dob:"06/03/2000",
        course:"fulsack",
        doj:"07/05/2022",
        locations:"sankarankovil",
        branch:"chennai",
        proect:[{tite:"",lins:"",topic:""},{tite:"",lins:"",topic:""},{tite:"",lins:"",topic:""},{tite:"",lins:"",topic:""},{tite:"",lins:"",topic:""}],
        wpm:[{days:"",speed:23},{days:"",speed:23},{days:"",speed:23},{days:"",speed:23},{days:"",speed:23},{days:"",speed:23},{days:"",speed:23}],
        apptitude:[2,7,8,5,9,5,7],
        gramers:[4,8,9,6,5],
        couesess:[[],[],[],[]],
        msgs:[],
        notifications:[],
        batch:"FED-10"


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
      
    return (<div>

        <div className="heading row">
            <div className="col-2 bg-primary">1</div>
            <div className="col-7 bg-warning  text-center"><input type='text' placeholder='Search...' className='search-text-input' />

            </div>

            <div className="col-3  bg-danger">
                <div className="logou row">
                    <div className="col-4">
                        <div className='nav-img'>msg</div>

                    </div>
                    <div className="col-4">
                        <div className='nav-img'>nov</div>

                    </div>
                    <div className="col-4">
                        <div className='nav-img'>img</div>
                    </div>

                </div>
            </div>

        </div>
        <div className="dashboard row">
            <div className="col-2 bg-warning">1</div>
            <div className="col-10 bg-secondary">
                <div className="innerdash row">
                    <div className="col-8 bg-danger m-1">
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
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
                                </div>
                            </div>
                            words per minie
                        </div>
                        <div className="row">
                            <div className="col-6 p-5 bg-danger">gilink
                                <div className="gilink">
                                    <div>
                                        <p>opic</p>
                                        <a>link</a>
                                    </div>
                                    <div>
                                        <p>opic</p>
                                        <a>link</a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-6 p-5 bg-warning">
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

                            </div>
                        </div>
                    </div>
                    <div className="col-3 bg-warning m-1">9
                        <div className='imgs'>
                            <div className='imgs1'></div>

                        </div>
                        <div className='row stuens'>
                            <div className='col-5'>NAME</div>
                            <div className='col-5'>:</div>

                        </div>
                        <div className='row stuens'>
                            <div className='col-5'>D.O.B</div>
                            <div className='col-5'>:</div>

                        </div><div className='row stuens'>
                            <div className='col-5'>EMAIL</div>
                            <div className='col-5'>:</div>

                        </div><div className='row stuens'>
                            <div className='col-5'>MOBILE</div>
                            <div className='col-5'>:</div>

                        </div><div className='row stuens'>
                            <div className='col-5'>D.O.J</div>
                            <div className='col-5'>:</div>

                        </div><div className='row stuens'>
                            <div className='col-5'>LOCAION</div>
                            <div className='col-5'>:</div>

                        </div><div className='row stuens'>
                            <div className='col-5'>COURSE</div>
                            <div className='col-5'>:</div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>)

}
export default Rainee