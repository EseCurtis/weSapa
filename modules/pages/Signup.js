const {Nav} = require("prop_nav");
const {SignupForm} = require("prop_signupForm");
const {Footer} = require("prop_footer");

const Signup = ()=>{
    return `
        ${Nav()}
        <hr>
        ${SignupForm()}
        <hr>
        ${Footer()}
    `;
}

module.exports = {Signup};