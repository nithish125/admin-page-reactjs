import React from "react";
import './Rainee.css'
import image from './download.png'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import image1 from "./Ajith_Arrambam_Screengrab_1122021_1200.jpg"
function Heading() {
return(<div>
    <div className="heading row bg-dark">
            <div className="col-2  ogonav">
                <img src={image}></img>
          
            </div>
            <div className="col-7   text-center"><input type='text' placeholder='Search...' className='search-text-input' />

            </div>

            <div className="col-3  usernav">
                <div className="logou row">
                    <div className="col-4">
                        <div className='nav-img'>msg</div>

                    </div>
                    <div className="col-4">
                        <div className='nav-img'>
                           <div className="noti"><NotificationsActiveIcon /></div> 
                        </div>

                    </div>
                    <div className="col-4">
                        <div className='nav-img'>
<img src={image1}></img>
                        </div>
                    </div>

                </div>
            </div>

        </div>
</div>)
}
export default  Heading