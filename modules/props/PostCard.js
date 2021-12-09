const PostCard = (title = "default", image = "./assets/images/profile-image.jpg")=>{
    return `
        <div class="way__card post-card">
            <div class="display-image">
                <img src="${image}" alt="" height="100%">
            </div>
            <div class="card-meta">
                <p class="title">${title}</p>
            </div>
        </div>
    `;
}

module.exports = {PostCard};