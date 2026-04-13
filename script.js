let input = document.getElementById("inputPokemon");
let botonBuscar = document.getElementById("buscarValor");
let informacion = document.getElementById("valorInformacion");
let botonGuardar = document.getElementById("valorGuardar");
let favoristos = document.getElementById("favoritosCargue");

let informacionPokemon = null;

botonBuscar.addEventListener("click", function () {
  searchPokemon();
});

function searchPokemon() {
  let traerPokemon = input.value.trim().toLocaleLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${traerPokemon}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      informacionPokemon = {
        imagen: data.sprites.front_default,
        nombre: data.name,
      };
      informacion.innerHTML = `<p>${informacionPokemon.nombre}</p><img src="${informacionPokemon.imagen}" alt="" />`;
    })
    .catch(function (error) {
      alert("¡Error! Pokémon no encontrado");
    });
}

function saveFavorite(pokemon) {
  if (pokemon === null) {
    alert("Primero busca un pokémon");
    return;
  }
  let listaFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  listaFavoritos.push(pokemon);
  localStorage.setItem("favoritos", JSON.stringify(listaFavoritos));
  renderFavoritos(listaFavoritos);
}
botonGuardar.addEventListener("click", function () {
  saveFavorite(informacionPokemon);
});

function renderFavoritos(lista) {
  favoristos.innerHTML = "";
  lista.forEach(function (pokemon) {
    favoristos.innerHTML += `<p>${pokemon.nombre}</p><img src="${pokemon.imagen}" alt="" />`;
  });
}