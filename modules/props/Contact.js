const Contact = ()=>{
    return `
        <div class="app__stats app__section">
            <div class="stats-header">
                <h3 class="stylish">Contact</h3>
            </div>
            <div class="col-md-12">
                <div class="col-md-4 col-md-offset-4">
                    <div class="app__contact">
                        <p>Name</p>
                        <input type="text" class="inp">
                        <p>Email</p>
                        <input type="text" class="inp">
                        <p>Message</p>
                        <textarea name="" class="inp" rows="7"></textarea>
                        <button class="btn primary">Send</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

module.exports = {Contact};