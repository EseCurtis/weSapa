const {Nav} = require("prop_nav");
const {Footer} = require("prop_footer");

const NotFound = ()=>{
    return `
        ${Nav()}
        <hr>
        <header class="app__header app__section">
            <div class="app__hero">
                <h1 class="hero-title">4<span class="special">0</span>4</h1>
                <small class="hero-title">page not found</small>
                <p class="hero-description">Sho! Nothing dey here oh e dry like <span class="special">sapa!</span>.</p>
            </div>
        </header>
        <hr>
        ${Footer()}
    `;
}

module.exports = {NotFound};