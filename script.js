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

function switchTab(clickedTab){
if(clickedTab!=currentTab){
    currentTab.classList.remove("current-tab");
    currentTab=clickedTab;
    currentTab.classList.add("current-tab");
    if(!searchForm.classList.contains("active")){
        userInfoContainer.classList.remove("active"); 
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
    }
    else{
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active"); 
        getFromSessionStorage();
    }
}
}

userTab.addEventListener("click",()=>{
    // pass clicked tab as input parameter
switchTab(userTab)
});
searchTab.addEventListener("click",()=>{
    // pass clicked tab as input parameter
switchTab(searchTab)
});