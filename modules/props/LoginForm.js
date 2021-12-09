const LoginForm = ()=>{
    return `
        <div class="app__stats app__section">
            <div class="stats-header">
                <h3 class="stylish">Login</h3>
            </div>
            <div class="col-md-12">
                <div class="col-md-4 col-md-offset-4">
                    <form class="app__form">
                        <p>Username</p>
                        <input type="text" class="inp">
                        <p>Password</p>
                        <input type="text" class="inp">
                        <p></p>
                        <p></p>
                        <div class="form__actions">
                            <button class="btn primary">Login</button>
                            <p>Forgotten Password?</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
}

module.exports = {LoginForm};