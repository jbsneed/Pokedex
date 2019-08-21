var pokemonRepository = (function() {
  var repository = [
    {
      name: "Pikachu",
      height: 0.4,
      types: ["static", "lightningrod"]
    },
    {
      name: "Charmander",
      height: 0.6,
      types: ["blaze", "solar-power"]
    },
    {
      name: "Squirtle",
      height: 0.5,
      types: ["rain-dish", "torrent"]
    },
    {
      name: "Bellsprout",
      height: 0.7,
      types: ["chlorophyll", "gluttony"]
    },
    {
      name: "Seel",
      height: 1.1,
      types: ["thick-fat", "hydration", "ice-body"]
    }
  ];

  function add(pokemon) {
    if (typeof pokemon === "object") {
      document.write(repository.push(pokemon));
    } else {
      alert("Added content contains incorrect type of data");
    }
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(
    pokemon.name +
      "<br> Height: " +
      pokemon.height +
      "<br> Types: " +
      pokemon.types +
      "<br><br>"
  );
});

pokemonRepository.add({ name: "Pikachu" });
