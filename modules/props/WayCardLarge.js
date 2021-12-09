import WaysData from "./WaysData.js";

const WayCardLarge = (way_id)=>{
    let currentWay = WaysData[way_id];
    return `
    <div class="col-md-12">
        <div class="col-md-6 col-md-offset-3">
            <div class="way__card-large">
                <div class="display-image">
                    <img src="${currentWay.image}" alt="" width="100%">
                </div>
                <div class="card-title">
                    <h3>FlowExtra</h3>
                </div>
                <div class="card-meta">
                    <span>${currentWay.description}</span>
                    <div>
                        <span>
                            ${currentWay.reviews}
                            <span class="special typcn-star-full-outline"></span>
                        </span>  
                        <sr></sr>
                        <span>
                            ${currentWay.reviews}
                            <span class="special-red typcn-flash"></span>
                        </span>
                    </div>
                    <a class="btn primary" href="${currentWay.link}">Visit</a>
                </div>
            </div>
        </div>
    </div>
    `;
}

module.exports = {WayCardLarge};