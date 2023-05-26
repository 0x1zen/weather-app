const userTab=document.querySelector("[data-userWeather]");
const searchTab=document.querySelector("[data-searchWeather]");
const userContainer=document.querySelector(".weather-container");
const grantAccessContainer=document.querySelector(".grant-location-container");
const searchForm=document.querySelector("[data-searchForm]");
const loadingScreen=document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-container");
const grantAccessBtn=document.querySelector("[data-grantBtn]");

// initial variables

let currentTab=userTab;
// let API_KEY="3ff3b550f32b88b5b9814fa296242404";
let API_KEY="d1845658f92b31c64bd94f06f7188c9c";
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
};
userTab.addEventListener("click",()=>{
    // pass clicked tab as input parameter
switchTab(userTab)
});
searchTab.addEventListener("click",()=>{
    // pass clicked tab as input parameter
switchTab(searchTab)
});

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
    };
    async function fetchUserWeatherInfo(coordinates){
        const {lat,lon}=coordinates;
        // make grantaccess container invisible
        grantAccessContainer.classList.remove("active");
        loadingScreen.classList.add("active");
        // API CALL
        try{
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric}`); 
        const data= await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
        }
        catch(err){
        loadingScreen.classList.remove("active");
        var message="Error Occured! Please try again in some time."
        alert(message);
        return true;
        };
    }
    function renderWeatherInfo(weatherInfo){
        // fetch elements
        const cityName=document.querySelector("[data-cityName]");
        const countryIcon=document.querySelector("[data-countryIcon]");
        const weatherdesc=document.querySelector("[data-weatherDesc]");
        const weatherIcon=document.querySelector("[data-weatherIcon]");
        const temperature=document.querySelector("[data-temperature]");
        const windSpeed=document.querySelector("[data-windSpeed]");
        const humidity=document.querySelector("[data-humidity]");
        const clouds=document.querySelector("[data-clouds]");

        // fetching values from weatherInfo object
        cityName.innerText=weatherInfo?.name;
        windSpeed.innerText=weatherInfo?.wind?.speed;
        clouds.innerText=weatherInfo?.clouds?.all;
        countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
        desc.innerText = weatherInfo?.weather?.[0]?.description;
        weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
        temperature.innerText=weatherInfo?.main?.temp;
        humidity.innerText=weatherInfo?.main?.humidity;
    }
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else{
            var message="Error Occured! Geolocation Not Supported";
            alert(message);
            return true;
        }
    }
  grantAccessBtn.addEventListener("click",getLocation);

   
