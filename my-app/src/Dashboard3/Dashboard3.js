import React from "react";
import './dashboard.css'
function Dashboar3(){
    return(<div>
        <div className="heading row">
            <div className="col-2 bg-primary">1</div>
            <div className="col-7 bg-warning">2</div>
            <div className="col-3  bg-danger">3</div>

        </div>
        <div className="dashboard row">
            <div className="col-2 bg-warning">1</div>
            <div className="col-10 bg-secondary">
            <div className="innerdash row">
                <div className="col-8 bg-danger m-1">
                    <div className="row">
                        <div className="col-4 bg-dark">1</div>
                        <div className="col-4 bg-warning ">1
                        <div className="heart-shape"></div>
                        </div>
                        <div className="col-4 bg-danger">1</div>

                    </div>
                </div>
                <div className="col-3 bg-warning m-1">9</div>

            </div>
            </div>
        </div>
    </div>)

}
export  default Dashboar3