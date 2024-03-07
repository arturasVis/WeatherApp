import { getGIF } from "./giphy";
function loadClothes(text){
    const imgClothes=document.querySelector(".clothes");
    getGIF(text).then(function(img){
        imgClothes.src=img;
    }).catch(function(err){
        console.log(err)
    });
}

export function loadBasedOnWeather(weather){
    const clothes_text=document.querySelector(".clothes_value");
    if(parseFloat(weather) > 20){
        loadClothes("T-Shirt");
        clothes_text.innerHTML="T-Shirt weather init mate"
    }
    else if(parseFloat(weather)>15){
        loadClothes("Hoodie");
        clothes_text.innerHTML="Hoodie weather init mate";
    }
    else if(parseFloat(weather)> 10)
    {
        loadClothes("Light Jacket");
        clothes_text.innerHTML="Jacket weather init mate";
    }
    else
    {
        loadClothes("Winter coat");
        clothes_text.innerHTML="Fucking freezing weather init mate";
    }
}