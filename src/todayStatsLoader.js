import { getCurrentAuto} from "./weather_Api";
import { getLocation } from "./location";
import { getGIF } from "./giphy";
import { loadBasedOnWeather } from "./clothes";

export function loadData(){
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
        getCurrentAuto("",lat,lon).then(function(temp){
            loadStats(temp);
            //console.log(temp);
        }).catch(function(error){
            console.log(error)
        })
    })
    
    
}

function loadStats(temp){
    const temp_number=document.querySelector("#temp_number");
    const wind_speed=document.querySelector('#wind_speed_value');
    const wind_direction=document.querySelector('#wind_direction_value');
    const pressure=document.querySelector('#pressure_value');
    const prespiritation=document.querySelector('#precipitation_value');
    const humidity=document.querySelector("#humidity_value");
    const cloud_cover=document.querySelector("#cloud_cover_value");
    const feels_like= document.querySelector("#feels_like_value");
    const location_city=document.querySelector(".city_name");
    const region=document.querySelector(".region");
    const GIF=document.querySelector(".weather_gif ");
    const icon=document.querySelector(".icon");
    location_city.innerHTML=temp.location.name;
    icon.src=temp.current.condition.icon;
    region.innerHTML=temp.location.region;
    temp_number.innerHTML=temp.current.temp_c+" C";
    wind_speed.innerHTML=temp.current.wind_mph+" Mph";
    wind_direction.innerHTML=temp.current.wind_dir;
    pressure.innerHTML=temp.current.pressure_mb+" mb";
    prespiritation.innerHTML=temp.current.precip_mm+" mm";
    humidity.innerHTML=temp.current.humidity +"%";
    cloud_cover.innerHTML=temp.current.cloud+"%";
    feels_like.innerHTML=temp.current.feelslike_c+" C";
    getGIF(temp.current.condition.text).then(function(img){
        GIF.src=img;
    }).catch(function(err){
        console.log(err)
    });
    loadBasedOnWeather(temp.current.temp_c);
}
function load(text_box){
    getCurrentAuto(text_box.value).then(function(forecast){
        loadStats(forecast);
    }).catch(function(err){
        console.log(err);
    })
}
