var pokemonRepository = (function() {
  var repository = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/";

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

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      showModal(pokemon);
      console.log(pokemon);
    });
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

  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = Object.keys(details.types);
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  // MODAL FUNCTIONS //

  function showModal(item) {
    var $modalContainer = document.querySelector("#modal-container");

    $modalContainer.innerHTML = "";

    var modal = document.createElement("div");
    modal.classList.add("modal");

    var closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    var nameElement = document.createElement("h3");
    nameElement.innerText = item.name;

    var imageElement = document.createElement("img");
    imageElement.classList.add("modal-img");
    imageElement.setAttribute("src", item.imageUrl);

    var heightElement = document.createElement("p");
    heightElement.innerText = "Height: " + item.height;

    modal.appendChild(closeButtonElement);
    modal.appendChild(nameElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    $modalContainer.appendChild(modal);

    $modalContainer.classList.add("is-visible");
  }

  function hideModal() {
    var $modalContainer = document.querySelector("#modal-container");
    $modalContainer.classList.remove("is-visible");
  }

  //closes modal when escape key is pressed//
  window.addEventListener("keydown", e => {
    var $modalContainer = document.querySelector("#modal-container");
    if (
      e.key === "Escape" &&
      $modalContainer.classList.contains("is-visible")
    ) {
      pokemonRepository.hideModal();
    }
  });

  //closes modal when clicked outside of it//
  var $modalContainer = document.querySelector(".pokemon-list");

  $modalContainer.addEventListener("click", e => {
    var target = e.target;
    if (target !== $modalContainer) {
      pokemonRepository.hideModal();
    }
  });
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

var $ul = document.querySelector("ul");
