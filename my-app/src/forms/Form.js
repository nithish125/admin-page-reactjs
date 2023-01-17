import React from "react";
// import '../Dashboard1/Dashboar.css'
function Form(){
return(
    <div>
         <div class="form-edit">
                    <div class="form1">
                        <h2 class="regestration">Regestration form</h2>
                        <form action="">
                            <label for="fname">First name:</label>
                            <input type="text" id="fname" name="fname" />
                            <label for="lname">Last name:</label>
                            <input type="text" id="lname" name="lname" /><br />
                            <label for="phone">Phone Number:</label>
                            <input type="text" id="phone" name="phone" /><br />
                            <label for="dob">D.O.B:</label>
                            <input type="text" id="dob" name="dob" /><br />
                            <label for="branch">branch:</label>
                            <input type="text" id="branch" name="branch" /><br />
                            <label for="mail">mail:</label>
                            <input type="text" id="mail" name="mail" /><br />
                            <label for="date">Join date:</label>
                            <input type="text" id="date" name="date" /><br />
                            <label for="Project"> Current Project:</label>
                            <input type="text" id="Project" name="Project" /><br />
                            <label for="course">Courses:</label>
                            <select name="course" id="course">
                                <option value="fsd">Full stack developement</option>
                                <option value="fed">Front end developement</option>
                                
                            </select><br />
                            <label for="course">Qualification:</label>
                            <select name="qualification" id="qualification">
                                <option value="fsd">BE</option>
                                <option value="fed">BCS</option>
                                <option value="fsd">ME</option>
                                <option value="fed">MBA</option>
                                
                            </select><br />
                            <div class="fle">
                            <p class="submit"><input type="submit" value="submit" /> </p>
                            <p class="cancel"><a href="view.html">cancel</a></p>
                            </div>
                        </form>
                    </div>



                </div>


    </div>
)
}
export default Form
