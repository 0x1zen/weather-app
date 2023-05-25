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
// Check if coordinates already present in session storage
function getFromSessionStorage(){
const localCoordinates=sessionStorage.getItem("user-coordinates");
// if local coordinates not present
if(!localCoordinates){
    grantAccessContainer.classList.add("active");
}
else{
    const coordinates=JSON.parse(localCoordinates);
    fetchUserWeatherInfo(coordinates);
}
}
async function fetchUserWeatherInfo(coordinates){
    const {lat,lon}=coordinates;
    // make grantaccess container invisible
    grantAccessContainer.classList.remove("active");
    leadingScreen.classList.add("active");
    // API CALL
    try{
    const res=await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`); 
    const data= await response.json();
    leadingScreen.classList.remove("active");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);

    }
    catch(err){
    leadingScreen.classList.remove("active");
    var message="Error Occured! Please try again in some time."
    alert(message);
    return true;
    };
}

userTab.addEventListener("click",()=>{
    // pass clicked tab as input parameter
switchTab(userTab)
});
searchTab.addEventListener("click",()=>{
    // pass clicked tab as input parameter
switchTab(searchTab)
});