const {Router} = require("router");
const {Controllers} = require("controllers");
const {appStyle} = require("appStyle");
const {HexLoader} = require("hexLoader");

const amvcFlat = new AMVC();
const AppControllers = new Controllers();

const AppLoader = document.getElementById("app-loader");
AppLoader.innerHTML = HexLoader();

const App = (Page, onPageLoaded = ()=>{})=>{
    pageKey = Page;
    const AppRoot = document.getElementById("app-root");
    AppRoot.setAttribute("style", "opacity:0 !important");
    setTimeout(() => {
        AppRoot.innerHTML = Page;
        setTimeout(() => {
            AppRoot.setAttribute("style", "opacity:100 !important");
            onPageLoaded();
            handleVform();
        }, 50);
    }, 400);
}

const focusDiv = (el)=>{
    let focusElement = document.querySelector(el);
    let scrollPoint = focusElement.offsetTop - 40;
    window.scroll(0, scrollPoint);
}

const routeApp = ()=>{ 
    if(location.hash.length > 0){
        if(!Router){
            window.location.reload();
        }
        let appRouter = Router([
            {
                route:"/home/*",
                script:()=>{
                    let {Home} = require("home");
                    App(Home());
                },
            },
            {
                route:"/login/*",
                script:()=>{
                    let {Login} = require("login");
                    App(Login());
                },
            },
            {
                route:"/signup/*",
                script:()=>{
                    let {Signup} = require("signup");
                    App(Signup());
                },
            },
            {
                route:"/about/*",
                script:()=>{
                    let {Home} = require("home");
                    App(Home(), ()=>{
                        focusDiv("#app__about");
                    });
                    
                },
            },
            {
                route:"/profile/*",
                script:()=>{
                    let {Profile} = require("profile");
                    App(Profile());
                },
            },
            {
                route:"/dashboard/*",
                script:()=>{
                    let {Dashboard} = require("dashboard");
                    App(Dashboard());
                },
            },
            {
                route:"/way/{way_id:[a-zA-Z0-9-_]+}/*",
                script:(queries)=>{
                    App(Pages.way(queries.way_id));
                },
            },
            {
                route:"/dashboard/home/*",
                script:()=>{
                    let {Dashboard} = require("dashboard");
                    App(Dashboard());
                },
            },
            {
                route:"/dashboard/profile/*",
                script:()=>{
                    let {Dashboard} = require("dashboard");
                    let {Dashboard_Profile} = require("dashboard_profile");
                    App(Dashboard(Dashboard_Profile()));
                },
            },
            {
                route:"/dashboard/ways/*",
                script:()=>{
                    let {Dashboard} = require("dashboard");
                    let {Dashboard_Ways} = require("dashboard_ways");
                    App(Dashboard(Dashboard_Ways()));
                },
            },
            {
                route:"/dashboard/ways/new*",
                script:()=>{
                    let {Dashboard} = require("dashboard");
                    let {Dashboard_Ways_New} = require("dashboard_ways_new");
                    App(Dashboard(Dashboard_Ways_New()));
                },
            }
        ]);

        if(appRouter.length < 1){
            let {NotFound} = require("notFound");
            App(NotFound());
        }
    }else{
        let {Home} = require("home");
        App(Home());
    }
}
onpopstate = ()=>{
    routeApp();
}
routeApp();

const stylize = (stylizeStyle)=>{
    let element = document.createElement("style");
    element.innerHTML = stylizeStyle;
    document.body.append(element);
}

document.body.onload = ()=>{
    //stylize(appStyle.appRoot);
    
}



