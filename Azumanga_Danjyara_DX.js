const decklist = [
  "img/Pixle Chiyo Tile.png",
  "img/Pixle Osaka Tile.png",
  "img/Pixle Sakaki Tile.png",
  "img/Pixle Tomo Tile.png",
  "img/Pixle Yomi Tile.png"
];
let playerCardsList = [

]

document.getElementById("playersHand").addEventListener("click", function(event) {
  if (event.target.tagName === "IMG") {
    event.target.remove();
    renderCards()
  }
});

function renderCards() {
  const hand = document.getElementById('playersHand');
  hand.innerHTML = ''; // Clear the hand

  playerCardsList.forEach((card) => {
    const img = document.createElement('img');
    img.src = 'img/' + card.image;
    img.classList.add('card');

    // Use a reference to the card object, not the index
    img.addEventListener('click', () => {
      // Find the card's actual index in the array
      const index = playerCardsList.indexOf(card);
      if (index !== -1) {
        playerCardsList.splice(index, 1); // Remove from array
        renderCards(); // Re-render UI
      }
    });

    hand.appendChild(img);
  });
}

function checkDealCard(){
  if(playerCardsList.length<8){
    dealCard()
  }
}

function dealCard() {
  const newCard = document.createElement("img");
  newCard.src = getRandomCard(); // Set the image source

  const playersHand = document.getElementById("playersHand");
  playersHand.appendChild(newCard); // Add to the player's hand

  playerCardsList.push(newCard)
  console.log(playerCardsList)
}

function getRandomCard() {
  const index = Math.floor(Math.random() * decklist.length);
  return decklist[index];
}