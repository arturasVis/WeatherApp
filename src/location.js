export function getLocation(){
    return new Promise(function(resolve,reject){
        if ("geolocation" in navigator) {
            /* Geolocation is available */
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position);
              resolve(position);
            }, function(error) {
              console.error("Error Code = " + error.code + " - " + error.message);
              reject(error);
            });
          } else {
            /* Geolocation is not supported by this browser */
            console.log("Geolocation is not supported by your browser");
            reject("Geolocation is not supported by your browser");
          }
    })
    
      
}