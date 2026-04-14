let input = document.getElementById("inputPokemon");
let botonBuscar = document.getElementById("buscarValor");
let informacion = document.getElementById("valorInformacion");
let botonGuardar = document.getElementById("valorGuardar");
let divFavoritos = document.getElementById("favoritos");


// async function obtenerUsuarios() {
//   try {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

//     if (!response.ok) {
//       throw new Error("Error en la petición");
//     }

//     const pokemon = await response.json();
//     console.log(pokemon);

//   } catch (error) {
//     console.error(error);
//   }
// }

//obtenerUsuarios();

botonBuscar.addEventListener("click", function () {
  searchPokemon();
});

let pokemon = {};
let listaFavoritos = null

function searchPokemon() {
  let nombrePokemon = input.value.trim().toLocaleLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      pokemon.nombre = data.name,
      pokemon.imagen = data.sprites.front_default

      
      informacion.innerHTML = `<p>${pokemon.nombre}</p> <img src="${pokemon.imagen}" alt=""></img>`;
    })
    .catch(function (error) {
      alert("¡Error! Pokémon no encontrado");
    });
}

function saveFavorite() {
    
  if (Object.keys(pokemon).length === 0 ) {
    alert("no hay pokemon para guardar");
    return 
  }
  if(localStorage.getItem("pokemones_favoritos") == null) {
    console.log("La lista de favorita esta vacia")
    listaFavoritos = [];
    listaFavoritos.push(pokemon);
    localStorage.setItem("pokemones_favoritos", JSON.stringify(listaFavoritos));

  }else {
    listaFavoritos = JSON.parse(localStorage.getItem("pokemones_favoritos"))
    if (!listaFavoritos.includes(pokemon.nombre)){
        listaFavoritos.push(pokemon);
    }
  }
   localStorage.setItem("pokemones_favoritos",JSON.stringify(listaFavoritos))
   updateFavoritesList() 
}
botonGuardar.addEventListener("click", function(){
  saveFavorite();
});

function updateFavoritesList(){
  let favoritos = JSON.parse(localStorage.getItem("pokemones_favoritos"))
  divFavoritos.innerHTML = "";
  let titulo = document.createElement("h1")
  titulo.textContent="Favoritos";
  divFavoritos.appendChild(titulo);
  favoritos.forEach(function(elemento){
    let divPokemon = document.createElement("div");
    divPokemon.innerHTML = `<h2>${elemento.nombre}</h2><img src="${elemento.imagen}">`
    divFavoritos.appendChild(divPokemon)
  })
}
document.addEventListener("DOMContentLoaded", function(){
  updateFavoritesList();
})
