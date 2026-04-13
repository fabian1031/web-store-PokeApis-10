let input = document.getElementById("inputPokemon");
let botonBuscar = document.getElementById("buscarValor");
let informacion = document.getElementById("valorInformacion");
let botonGuardar = document.getElementById("valorGuardar");
let favoristos = document.getElementById("favoritosCargue");

botonBuscar.addEventListener("click", () => {
  let traerPokemon = input.value.trim().toLocaleLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${traerPokemon}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
     
      console.log(data);
    })
    .catch(function (error) {
      alert("¡Error! Pokémon no encontrado");
    });
});
