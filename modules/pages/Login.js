const {Nav} = require("prop_nav");
const {LoginForm} = require("prop_loginForm");
const {Footer} = require("prop_footer");

const Login = ()=>{
    return `
    <div class="app-two_panes">
    <div class="left-pane">
        <div class="app__hero">
            <h1 class="hero-title"><span class="special">we</span>SAPA!</h1>
            <p class="hero-description">Login and welcome to weSapa portal.
                <div class="hero-social">
                    <span class="typcn-social-facebook-circular"></span>
                    <span class="typcn-mail"></span>
                    <span class="typcn-social-instagram"></span>
                    <span class="typcn-social-pinterest-circular"></span>
                </div>
            </p>
        </div>
    </div>
    <div class="right-pane">
        <div class="stats-header">
            <h3 class="stylish">Login</h3>
        </div>
        <form class="app__form">
            <p>Username</p>
            <input type="text" class="inp">
            <p>Password</p>
            <input type="text" class="inp">
            <p></p>
            <p></p>
            <div class="form__actions">
                <button class="btn primary">Login</button>
            </div>
        </form>

        <div class="form__extras">
            <p>You don't have an account? <a href="#" class="special">Signup.</a></p>
            <a href="#" class="special">Forgotten Password?</a>
        </div>
    </div>
</div>
    `;
}

module.exports = {Login};