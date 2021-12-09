let {Dashboard_Home} = require("dashboard_home");
const Dashboard = (subPageContent = Dashboard_Home)=>{
    return `
        <div class="dash__main">
            <div class="dash__view-box">
                <div class="col-md-12">
                    <div class="col-md-6">
                        <h3 class="">Welcome User,</h3>
                    </div>
                </div>
                ${subPageContent}
            </div>
            <div class="dash__nav">
                <div class="nav-items">
                    <a href="" class="item active">
                        <span class="item-icon typcn-home-outline"></span>
                    </a>
                    <a href="#/dashboard/notifications" class="item">
                        <span class="item-icon typcn typcn-bell"></span>
                    </a>
                    <a href="#/dashboard/ways" class="item">
                        <span class="item-icon typcn-th-list-outline"></span>
                    </a>
                    <a href="#/dashboard/profile" class="item">
                        <span class="item-icon typcn-user-outline"></span>
                    </a>
                    <a href="#/dashboard/settings" class="item">
                        <span class="item-icon typcn-cog-outline"></span>
                    </a>
                </div>
                
            </div>
        </div>
    `;
}
module.exports = {Dashboard};