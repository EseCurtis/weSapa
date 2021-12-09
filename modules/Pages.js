const {Home} = require("home");
const {Login} = require("login");
const {Signup} = require("signup");
const {Profile} = require("profile");
const {Dashboard} = require("dashboard");
const {NotFound} = require("notFound");

const Pages = {
    home : Home(),
    login: Login(),
    signup: Signup(),
    profile: Profile(),
    dashboard: Dashboard(),
   // way: Way,
    "404": NotFound()
}

module.exports = {Pages};
