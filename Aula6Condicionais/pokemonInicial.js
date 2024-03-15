// Recebendo o Pokémon inicial escolhido
const pokemonEscolhido = "charmander";

// Determinando o tipo do Pokémon escolhido com switch case
switch (pokemonEscolhido) {
    case "bulbassauro":
        console.log("Tipo: Planta e Veneno");
        break;
    case "charmander":
        console.log("Tipo: Fogo");
        break;
    case "squirtle":
        console.log("Tipo: Água");
        break;
    default:
        console.log("Pokemon não escolhido.");
}
