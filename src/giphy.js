export function getGIF(text){
    return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=eAlkx9QotyjGokwSFf7MA8fGlF7HfIYT&s=${text}`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        //console.log(response);
        return response.data.images.original.url;
      }).catch(function(err){
        console.log(err);
      });
}