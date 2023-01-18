import React from "react";
import './Rainee.css'
function Logins(){
    var avin = [{
        names: "kavin",
        mobile: "9345335073",
        dob: "06/03/2000",
        course: "fulsack",
        doj: "07/05/2022",
        email:"avun@gmau.com",
        locations: "sankarankovil",
        branch: "chennai",
        proect: [{ tite: "", lins: "", topic: "" }, { tite: "", lins: "", topic: "" }, { tite: "", lins: "", topic: "" }, { tite: "", lins: "", topic: "" }, { tite: "", lins: "", topic: "" }],
        wpm: [{ days: "", speed: 23 }, { days: "", speed: 23 }, { days: "", speed: 23 }, { days: "", speed: 23 }, { days: "", speed: 23 }, { days: "", speed: 23 }, { days: "", speed: 23 }],
        apptitude: [2, 7, 8, 5, 9, 5, 7],
        gramers: [4, 8, 9, 6, 5],
        couesess: [[], [], [], []],
        msgs: [],
        notifications: [],
        batch: "FED-10"


    }]
return(<div>
    <div className='innerlog'>
                            <div className='imgs'>
                                <div className='imgs1'></div>

                            </div>
                            <div className='row stuens'>
                                <div className='col-5'>NAME</div>
                                <div className='col-7'>:{avin[0].names}</div>

                            </div>
                            <div className='row stuens'>
                                <div className='col-5'>D.O.B</div>
                                <div className='col-7'>:{avin[0].dob}</div>

                            </div><div className='row stuens'>
                                <div className='col-5'>EMAIL</div>
                                <div className='col-7'>:{avin[0].email}</div>

                            </div><div className='row stuens'>
                                <div className='col-5'>MOBILE</div>
                                <div className='col-7'>: {avin[0].mobile}</div>

                            </div><div className='row stuens'>
                                <div className='col-5'>D.O.J</div>
                                <div className='col-7'>: {avin[0].doj}</div>

                            </div><div className='row stuens'>
                                <div className='col-5'>LOCAION</div>
                                <div className='col-7'>:{avin[0]. locations}</div>

                            </div><div className='row stuens'>
                                <div className='col-5'>COURSE</div>
                                <div className='col-7'>:{avin[0].course}</div>

                            </div>
                        </div>
</div>)
}
export default Logins