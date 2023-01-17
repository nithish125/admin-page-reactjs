import React from 'react';
import './Dashboard1.css'
function Dashboard1() {

    const batchs = [
        {
            batchname: "FED3",
            course: ["html", "css", "javascript"],
            trainee: 10
        },
        {
            batchname: "FED4",
            course: ["html", "css", "javascript"],
            trainee: 12
        },
        {
            batchname: "FED5",
            course: ["html", "css", "javascript"],
            trainee: 4
        }
    ]
    return (<div classNameName='hai'>

        <div className="page1">
            <aside className="logo">
                <h2>logo</h2>
                <p><i className="icofont-home"></i>Home</p>
                <p> <i className="icofont-user-alt-5"></i>User</p>
                <p> <i className="icofont-gear"></i>Settings</p>

                <p><i className="icofont-certificate"></i>Courses</p>
                <p> <i className="icofont-chart-histogram"></i>Chart</p>
                <p> <i className="icofont-logout"></i>Log out</p>
                <p>Pages</p>
            </aside>

            <div className="batches3">


                <div className="bar">
                    <div className="ico"><i className="icofont-navigation-menu"></i></div>
                    <div className="user">
                        <p>user name</p>
                    </div>
                </div>
                <h3>batch list</h3>
                <div className="create1">
                    <p className="create"><a href="edit.html">create</a></p>
                </div>

                <div className="batches">
                    {
                        batchs.map((batchs) => {
                            return (
                                <div className="batch1">
                                    <h2>{batchs.batchname}</h2>

                                    <h4> courses</h4>
                                    {
                                        batchs.course.map((batchs) =>
                                            <div>
                                                <p>{batchs}</p>
                                            </div>)
                                    }
                                 <h4><span>trainee</span><span>{batchs.trainee}</span></h4>
                                    <button>open</button>
                                </div>)
                        })
                    }

                </div>
            </div>
        </div>


    </div>);
}



export default Dashboard1;