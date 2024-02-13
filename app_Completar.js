var pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const h1 = document.querySelector('h1')
const header = document.querySelector('header')
let imagepath = ""
const Urlimg = `https://image.tmdb.org/t/p/w500${imagepath}`
const API_KEY = "629ef7536f1f9623e5a6556c7b020e2e"

header.addEventListener("mouseenter", () => {
	h1.innerHTML = "Clickme"

})

header.addEventListener("mouseleave", () => {
	h1.textContent = "G202"


})

btnSiguiente.addEventListener('click', () => {
	if( pagina < 1000000){
		pagina++;
		fetchData();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina--;
		fetchData();
	}
});


function cargarPeliculas(result) {
	
	  let contenedor = document.querySelector("#contenedor");
	  contenedor.innerHTML = "";
	  console.log(result);
	  result.results.forEach(movie => {
		const movieContainer = document.createElement('article');
		
		const movieTitle = document.createElement('div');
		movieTitle.textContent = movie.title;
		
		const moviePoster = document.createElement('img');
		moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
		movieContainer.appendChild(moviePoster);

		const movieOverview = document.createElement('aside');
		movieOverview.textContent = movie.overview;
		movieContainer.appendChild(movieOverview)
		
		contenedor.appendChild(movieContainer);
	  });
  }


function fetchData() {
	let Url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pagina}&language=es-ES`
	
	fetch(Url)
    .then(response => response.json())
    .then(data => {
		cargarPeliculas(data)
    })
    .catch(error => console.log(error));
}


fetchData();




