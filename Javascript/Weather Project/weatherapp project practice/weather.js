const grantAccess=document.querySelector("[grantAccess]");
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
const grantLocationAccessConatiner=document.querySelector(".grantLocationAccess")
const loadingContainer=document.querySelector(".loadingContainer")
const weatherInfo=document.querySelector(".weatherinfo")
const city=document.querySelector("[city]")
const countryimage=document.querySelector("[countryimage]")
const description=document.querySelector("[description]")
const descriptionImage=document.querySelector("[descriptionImage]")
const temp=document.querySelector("[temp]")
const windSpeed=document.querySelector("[windSpeed]")
const humidityPercentage=document.querySelector("[humidityPercentage]")
const cloudPercentage=document.querySelector("[cloudPercentage]")
const userWeatherTab=document.querySelector("[userWeatherTab]")
const searchWeatherTab=document.querySelector("[searchWeatherTab]")
userWeatherTab.classList.add("selectedTab")
const searchForm=document.querySelector(".searchForm")
const searchInput=document.querySelector("#search")
const NotFoundImage=document.querySelector("[NotFoundImage]")
console.log(NotFoundImage.classList)

getLocationfromSessionStorage()

async function FetchLocationBasedOnCity(city){
  try{
    NotFoundImage.classList.remove("active")
    loadingContainer.classList.add("active") 
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    if(!response.ok){
        throw new Error
    }
    const data=await response.json()
    loadingContainer.classList.remove("active") 
    weatherInfo.classList.add("active")
    showOnScreen(data)
   
  }catch(e){
    console.log("inside catch of city search")
    loadingContainer.classList.remove("active")
    weatherInfo.classList.remove("active")
    NotFoundImage.classList.add("active")
    console.log(NotFoundImage.classList)
  }
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    if (searchInput.value) {
        const cityName=searchInput.value
        FetchLocationBasedOnCity(cityName) 
    } else {
        return
    }
   
})

function getLocationfromSessionStorage(){
    const UserLocation=JSON.parse(sessionStorage.getItem("user-current-location"))
    if(UserLocation){
        const currentCoordinate={
            lat:UserLocation.lat,
            lon:UserLocation.lon
          }
         
         callWeatherApi(currentCoordinate)
    }
    else{
        grantLocationAccessConatiner.classList.remove("inactive") 

    }
}

function switchTab(currentTab){
    if(currentTab===searchWeatherTab){
        if(!searchWeatherTab.classList.contains("selectedTab")){
            userWeatherTab.classList.remove("selectedTab")
            searchWeatherTab.classList.add("selectedTab")
            weatherInfo.classList.remove("active")
            grantLocationAccessConatiner.classList.add("inactive")
            searchForm.classList.add("active")
        }
        else{
            return
        }
       
    }
    if(currentTab===userWeatherTab){  
        searchWeatherTab.classList.remove("selectedTab")
        userWeatherTab.classList.add("selectedTab") 
        searchForm.classList.remove("active") 
        loadingContainer.classList.add("active")
        weatherInfo.classList.add("active")         
        getLocationfromSessionStorage()
        
    }
}



userWeatherTab.addEventListener("click",()=>{
   switchTab(userWeatherTab)
})
searchWeatherTab.addEventListener("click",()=>{
  switchTab(searchWeatherTab)
})

function showOnScreen(weatherInfo){
    console.log(weatherInfo)
    city.innerText=weatherInfo?.name
    countryimage.src=`https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`
    description.innerText= weatherInfo?.weather?.[0]?.description;
    descriptionImage.src=`http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`
    windSpeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidityPercentage.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudPercentage.innerText = `${weatherInfo?.clouds?.all}%`;

}

async function callWeatherApi(currentCoordinate)
{
    const {lat,lon}=currentCoordinate
    console.log(lat,lon)
    try {
        
        grantLocationAccessConatiner.classList.add("inactive")
        loadingContainer.classList.add("active")
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        const data=await response.json()
        // console.log(typeof data)
        //show on screen
        loadingContainer.classList.remove("active")
        weatherInfo.classList.add("active")

        showOnScreen(data)
    } catch (e) {
        console.log("Not able to fetch details and error is: ",e)
    }
}
function storePosition(position){
    // console.log(position)
    // console.log(typeof position)
  const currentCoordinate={
    lat:position.coords.latitude,
    lon:position.coords.longitude
  }
  console.log(currentCoordinate)
  sessionStorage.setItem("user-current-location",JSON.stringify(currentCoordinate))
 callWeatherApi(currentCoordinate)
}
function getCurrentLocation(){
   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(storePosition)
    
   } else {
     console.log("Geolocation facility is not avaialable for your device")
   }
}
grantAccess.addEventListener("click",()=>{
    getCurrentLocation()
})