const UserProfile = ()=>{
    return `
    <div class="app__profile app__section">
        <div class="profile-card first">
            <div class="profile-header">
                <div class="profile-image">
                    <img src="./assets/images/profile-image.jpg" alt="" width="100%">
                </div>
                <h4 class="profile-username">Ese Curtis</h4>
            </div>
            <div class="profile-meta">
                <div class="profile-bio">
                    <h4>Bio:</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae praesentium aliquam culpa dolor doloribus aperiam fugiat esse doloremque rerum.</p>
                </div>
            </div>
        </div>
        <h4 class="stylish">Sure Ways</h4>
        <div class="profile-card col-md-12 sure__ways">
            <div class="col-md-6">
                <div class="way__card">
                    <div class="display-image">
                        <img src="./assets/images/profile-image.jpg" alt="" height="100%">
                    </div>
                    <div class="card-meta">
                        <p class="title">Way demo</p>
                        <p>
                            <span>5</span> <span class="special typcn-star-full-outline"></span>
                        </p>
                        <p>
                            <span>20k</span>
                            <span class="special typcn-eject-outline"></span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="way__card">
                    <div class="display-image">
                        <img src="./assets/images/profile-image.jpg" alt="" height="100%">
                    </div>
                    <div class="card-meta">
                        <p class="title">Way demo</p>
                        <p>
                            <span>5</span> <span class="special typcn-star-full-outline"></span>
                        </p>
                        <p>
                            <span>20k</span>
                            <span class="special typcn-eject-outline"></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

module.exports = {UserProfile};