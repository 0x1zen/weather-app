const userTab=document.querySelector("[data-userWeather]");
const searchTab=document.querySelector("[data-searchWeather]");
const userContainer=document.querySelector(".weather-container");
const grantAccessContainer=document.querySelector(".grant-location-container");
const searchForm=document.querySelector("[data-searchForm]");
const leadingScreen=document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-container");

// initial variables

let currentTab=userTab;
let API_KEY="3ff3b550f32b88b5b9814fa296242404";
currentTab.classList.add("current-tab");

userTab.addEventListener("click",()=>{
    // pass clicked tab as input parameter
switchTab(userTab)
});
searchTab.addEventListener("click",()=>{
    // pass clicked tab as input parameter
switchTab(searchTab)
});