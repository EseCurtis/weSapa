const cTrim = (str = null, char = null)=>{
    str = str.split('');
    if(str[0] == char){
        str[0] = '';
    }
    if(str[str.length-1] == char){
        str[str.length-1] = '';
    }
    return str.join('');
}

const Router = currentRoutes=>{
    currentRoutes.push({route:'$',script:()=>{}});
    let comparisonRoute = cTrim((location.hash.replace("#", "")).toLowerCase(), '/').split('/');
    let mainRoute = [];
    let validRoutes = [];
    currentRoutes.forEach(currentRoute=>{
        let routeValues = '{';
        let comparisonRouteSliced = comparisonRoute;
        
        currentRoute.route = cTrim(currentRoute.route.toLowerCase(), '/').split('/');
        for (let i=0;i<currentRoute.route.length;i++) {
            if(currentRoute.route[i] == '*'){  
                comparisonRouteSliced = comparisonRoute.slice(0, i);
                currentRoute.route = currentRoute.route.slice(0, i);
                break;
            }
        }
        if(currentRoute.route.length == comparisonRouteSliced.length){
            
            for(let i=0;i<currentRoute.route.length;i++){
                if(currentRoute.route[i][0] == '{'){
                    currentRoute.route[i] = currentRoute.route[i].replace(/^[{]/g, '').replace(/[}]$/g, '').split(':');
                    let currentValue = comparisonRouteSliced[i].match(currentRoute.route[i][1]);
                    routeValues += '"'+currentRoute.route[i][0]+'":"'+currentValue+'"';
                    currentRoute.route[i] = currentRoute.route[i][1];
                }
                mainRoute.push(currentRoute.route[i]);
            }
            routeValues += '}';
            routeValues = JSON.parse(routeValues);
            let mainRouteNow = mainRoute.join('/');
            let comparisonRouteNow = comparisonRouteSliced.join('/');
            if(comparisonRouteNow.match(mainRouteNow)){
                if(comparisonRouteNow.match(mainRouteNow)[0].length == comparisonRouteNow.length){
                    currentRoute.script(routeValues);
                    validRoutes.push(currentRoute);
                }
            }
            mainRoute = [];
            routeValues = '';
        }
    });

    return validRoutes;
}

module.exports = {Router, cTrim};