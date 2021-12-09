const SignupForm = ()=>{
    
    return `
        <script src="./modules/props/controllers/signupController.js"></script>
        <div class="app__stats app__section">
            <div class="stats-header">
                <h3 class="stylish">Signup</h3>
            </div>
            <div class="col-md-12">
                <div class="col-md-4 col-md-offset-4">
                    <form class="app__contact hidden" action="amvc.api" api-key="create_user.php" async="true" method="post" callback="alert">
                        <p>First name</p>
                        <input type="text" class="inp" name="f_name">
                        <p>Last name</p>
                        <input type="text" class="inp" name="l_name">    
                        <p>Email</p>
                        <input type="text" class="inp" name="email">
                        <p>Gender</p>
                        <select name="gender" id="" class="inp" name="gender">
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                        <p>Date of Birth</p>
                        <input type="date" class="inp" name="dob">
                        <p>Password</p>
                        <input type="text" class="inp" name="password">
                        <p>Confirm password</p>
                        <input type="text" class="inp" name="password">
                        <button class="btn primary">Signup</button>
                    </form>

                    <div class="app__contact step_cards">
                        <div class="app__contact step_card" id="signup_stage-1">
                            <p>Email</p>
                            <input type="text" class="inp" name="email">
                            <p>Password</p>
                            <input type="text" class="inp" name="password">
                            <p>Confirm password</p>
                            <input type="text" class="inp" name="password">
                        </div>
                        <div class="app__contact step_card" id="signup_stage-2">
                            <p>Gender</p>
                            <select name="gender" id="" class="inp" name="gender">
                                <option value="m">Male</option>
                                <option value="f">Female</option>
                            </select>
                            <p>Date of Birth</p>
                            <input type="date" class="inp" name="dob">
                        </div>
                        <div class="app__contact step_card" id="signup_stage-3">
                            <p>First name</p>
                            <input type="text" class="inp" name="f_name">
                            <p>Last name</p>
                            <input type="text" class="inp" name="l_name"> 
                        </div>
                    </div>
                    <div class="app__contact">
                        <button class="btn primary" onclick="AppControllers.signup.previousStage()">Prev</button>
                        <button class="btn primary" onclick="AppControllers.signup.nextStage()">Next</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

module.exports = {SignupForm};