let input = document.getElementById("inputPokemon");
let botonBuscar = document.getElementById("buscarValor");
let informacion = document.getElementById("valorInformacion");
let botonGuardar = document.getElementById("valorGuardar");
let favoristos = document.getElementById("favoritosCargue");

botonBuscar.addEventListener("click", function () {
  searchPokemon();
});

let informacionPokemon = null;

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
      console.log(data);
      console.log(data.sprites.front_default);
      informacion.innerHTML = `<p>${informacionPokemon.nombre}</p> <img src="${informacionPokemon.imagen}" alt=""></img>`;
    })
    .catch(function (error) {
      alert("¡Error! Pokémon no encontrado");
    });
}
function saveFavorite() {
  if (informacionPokemon === null) {
    console.log("no hay datos guardatos");
  }
  if (localStorage.length == 0) {
    let listaFavoritos = [];
    listaFavoritos.push(informacionPokemon);

    return listaFavoritos;
  } else {
    localStorage.setItem("nombre", JSON.stringify(informacionPokemon));
  }
}

botonGuardar.addEventListener("click", function () {
  console.log("click");
  saveFavorite();
});
