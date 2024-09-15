//change the limit to however many images to use
const url = `https://api.thecatapi.com/v1/images/search?limit=
1`;
const api_key = "coloque sua chave aqui"

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  let imagesData = data;

  console.log('url: ' + imagesData[0].url);
  console.log(data)

  let image = document.createElement('img');
  //use the url from the image object
  image.src = `${imagesData[0].url}`;
  document.getElementById('img').appendChild(image)

})
.catch(function(error) {
   console.log(error);
   document.write("<h1 class='text-center'>Error ao buscar e carregar a imagem imagem de um gatinho fofinho </h1>");
});

