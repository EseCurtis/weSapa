const Nav = ()=>{
    return `
        <nav class="app__nav app__section">
            <a href="#/about" class="nav-item">about</a>
            <a href="#/profile" class="nav-item">profile</a>
            <a href="#/home" class="nav-item">home</a>
            <a href="#/login" class="nav-item">login</a>
            <a href="#/signup" class="nav-item">signup</a>
            <a href="#/dashboard" class="nav-item">Dashboard</a>
        </nav>
    `;
}

module.exports = {Nav};