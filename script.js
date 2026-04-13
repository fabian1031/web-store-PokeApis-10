let input = document.getElementById("inputPokemon");
let botonBuscar = document.getElementById("buscarValor");
let informacion = document.getElementById("valorInformacion");
let botonGuardar = document.getElementById("valorGuardar");
let favoristos = document.getElementById("favoritosCargue");


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

function searchPokemon() {
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
}


