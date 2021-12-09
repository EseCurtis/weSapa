const {Nav} = require("prop_nav");
const {WayCardLarge} = require("prop_wayCardLarge");
const {Footer} = require("prop_footer");

const Way = (way_id)=>{
    return `
        ${Nav()}
        <hr>
        ${WayCardLarge(way_id)}
        <hr>
        ${Footer()}
    `;
}

module.exports = {Way};