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
      repository.push(pokemon);
    } else {
      alert("Added content contains incorrect type of data");
    }
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };

  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

  function addListItem(pokemon) {
    var $listItem = document.createElement("li");
    var button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("selected");
    $listItem.appendChild(button);
    $ul.appendChild($listItem);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }
})();

var $ul = document.querySelector("ul");

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
