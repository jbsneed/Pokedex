var repository = [
  { name: "Pikachu", height: 0.4, types: ["static", "lightningrod"] },
  { name: "Charmander", height: 0.6, types: ["blaze", "solar-power"] },
  { name: "Squirtle", height: 0.5, types: ["rain-dish", "torrent"] },
  { name: "Bellsprout", height: 0.7, types: ["chlorophyll", "gluttony"] },
  { name: "Seel", height: 1.1, types: ["thick-fat", "hydration", "ice-body"] }
];

for (var i = 0; i < repository.length; i++) {
  document.write(
    "<p>" + repository[i].name + " (Height: " + repository[i].height + ")"
  );
  if (repository[i].height >= 1.0) {
    document.write(" - Wow, that's big!</p>");
  }
}
