const decklist = [
  "img/Pixle Chiyo Tile.png",
  "img/Pixle Osaka Tile.png",
  "img/Pixle Sakaki Tile.png",
  "img/Pixle Tomo Tile.png",
  "img/Pixle Yomi Tile.png"
];

function dealCard() {
  const newCard = document.createElement("img");
  newCard.src = getRandomCard(); // Set the image source

  const playersHand = document.getElementById("playersHand");
  playersHand.appendChild(newCard); // Add to the player's hand
}

function getRandomCard() {
  const index = Math.floor(Math.random() * decklist.length);
  return decklist[index];
}