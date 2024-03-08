
export function getCurrentAuto(location="",latitude="", longitude=""){
    let fetchURL=""
    if(location==="")
    {
        fetchURL=`http://api.weatherapi.com/v1/current.json?key=bc4649de6fbf447e84f171804240403&q=${latitude},${longitude}&aqi=no`
    }
    else{
        fetchURL=`http://api.weatherapi.com/v1/current.json?key=bc4649de6fbf447e84f171804240403&q=${location}&aqi=no`
    }
    return fetch(fetchURL,{mode:"cors"})
    .then(function(response){
        return response.json();
    }).then(function(data){
        return data;
    }).catch(function(err){
        console.log(err);
    });

}
export function getForecast(location="",latitude="", longitude=""){
    let fetchURL=""
    if(location==="")
    {
        fetchURL=`http://api.weatherapi.com/v1/forecast.json?key=bc4649de6fbf447e84f171804240403&q=${latitude},${longitude}&days=7&aqi=no&alerts=no`
    }
    else{
        fetchURL=`http://api.weatherapi.com/v1/forecast.json?key=bc4649de6fbf447e84f171804240403&q=${location}&days=7&aqi=no&alerts=no`
    }
    return fetch(fetchURL,{mode:"cors"})
    .then(function(response){
        return response.json();
    }).then(function(data){
        return data.forecast;
    }).catch(function(err){
        console.log(err);
    });

}
