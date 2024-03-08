import { getForecast } from "./weather_Api";
import { getLocation } from "./location";
export function loadForecast(){
    const text_box=document.querySelector(".text_box");
    const search_button=document.querySelector(".search_button");
    text_box.addEventListener("keypress",(e)=>{
        if(e.key==="Enter"){
            load(text_box);
        }
    })
    search_button.addEventListener("click",()=>{
        load(text_box);
    });
    getLocation().then(function(location){
        const lon=location.coords.longitude;
        const lat=location.coords.latitude;
        getForecast("",lat,lon).then(function(forecast){
            loadData(forecast);
        }).catch(function(err){
            console.log(err);
        })
    })
}

function loadData(forecast){
    const div_arr=document.querySelectorAll(".forecast_container");
    console.log(forecast.forecastday.length)
    for(let i=0;i<forecast.forecastday.length;i++){
        const date=new Date(forecast.forecastday[i].date)
        const day=date.getDay();
        const dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        div_arr[i].querySelector(".forecast_img").src=forecast.forecastday[i].day.condition.icon;
        div_arr[i].querySelector(".date").innerHTML=dayNames[day];
        div_arr[i].querySelector(".max_temp").innerHTML=forecast.forecastday[i].day.maxtemp_c +" C";
        div_arr[i].querySelector(".min_temp").innerHTML=forecast.forecastday[i].day.mintemp_c+ " C";
        console.log(forecast.forecastday[i]);
    }
}
function load(text_box){
    getForecast(text_box.value).then(function(forecast){
        loadData(forecast);
    }).catch(function(err){
        console.log(err);
    })
}