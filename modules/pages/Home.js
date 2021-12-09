const {Contact} = require("prop_contact");
const {Nav} = require("prop_nav");
const {Header} = require("prop_header");
const {About} = require("prop_about");
const {Stats} = require("prop_stats");
const {Footer} = require("prop_footer");

const Home = ()=>{
    return `
        ${Nav()}
        <hr>
        ${Header()}
        <hr>
        ${About()}
        <hr>
        ${Stats()}
        <hr>
        ${Contact()}
        <hr>
        ${Footer()}
    `;
}

module.exports = {Home};