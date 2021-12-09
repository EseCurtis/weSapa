const {Nav} = require("prop_nav");
const {UserProfile} = require("prop_userProfile");
const {Footer} = require("prop_footer");

const Profile = ()=>{
    return `
        ${Nav()}
        <hr>
        ${UserProfile()}
        <hr>
        ${Footer()}
    `;
}

module.exports = {Profile};