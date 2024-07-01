const pokemon = require('./data');

const starterPokemon = pokemon.find((pokemon) => pokemon.starter);
game.party.push(starterPokemon);

const pokemonToCatch = [pokemon[10], pokemon[20], pokemon[30]];
game.party.push(...pokemonToCatch);


const starterPokemonIndex = game.party.findIndex((pokemon) => pokemon.starter);
const evolvedPokemon = pokemon.find((pokemon) => {
  if (game.party[starterPokemonIndex].number === 1) return pokemon.number === 2;
  if (game.party[starterPokemonIndex].number === 4) return pokemon.number === 5;
  if (game.party[starterPokemonIndex].number === 7) return pokemon.number === 8;
  if (game.party[starterPokemonIndex].number === 25) return pokemon.number === 26;
});
game.party.splice(starterPokemonIndex, 1, evolvedPokemon);


const game = {
  party: [25],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
  condition: true,
};


game.difficulty = "Medium";


game.partyCount = () => {
  return game.party.length;
};
console.log(game.partyCount());


pokemon.filter((pokemon) => pokemon.starter).forEach((pokemon) => {
  console.log(pokemon.name);
});


game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
  const pokeballIndex = game.items.findIndex((item) => item.name === "pokeball");
  game.items[pokeballIndex].quantity--;
  console.log(game.items);
};
game.catchPokemon(pokemon[40]);


game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});


game.gymStatus = () => {
  const gymTally = { completed: 0, incomplete: 0 };
  game.gyms.forEach((gym) => {
    if (gym.completed) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  });
  console.log(gymTally);
};
game.gymStatus();


console.log(game);