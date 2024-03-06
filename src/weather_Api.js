
export function getCurrentAuto(latitude, longitude){
    return fetch(`http://api.weatherapi.com/v1/current.json?key=bc4649de6fbf447e84f171804240403&q=${latitude},${longitude}&aqi=no`,{mode:"cors"})
    .then(function(response){
        return response.json();
    }).then(function(data){
        return data;
    }).catch(function(err){
        console.log(err);
    });

}
