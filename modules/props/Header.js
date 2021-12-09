const Header = ()=>{
    return `
        <header class="app__header app__section">
            <div class="app__hero">
                <h1 class="hero-title"><span class="special">we</span>SAPA!</h1>
                <p class="hero-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quibusdam illum cum dignissimos repellendus dolor error at laboriosam, doloremque quis.</p>
                <div class="hero-social">
                    <span class="typcn-social-facebook-circular"></span>
                    <span class="typcn-mail"></span>
                    <span class="typcn-social-instagram"></span>
                    <span class="typcn-social-pinterest-circular"></span>
                </div>
                <div class="hero-buttons">
                    <button class="btn">Join Us</button>
                    <button class="btn primary">Login</button>
                </div>
            </div>
            
        </header>
    `;
}

module.exports = {Header};