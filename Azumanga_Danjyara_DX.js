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
    //event.target.remove();
    //var index = playerCardsList.indexOf(event.target);
    //playerCardsList.splice(1,index);
    event.target.src = playerCardsList[playerCardsList.length - 1].src;
    document.getElementById("nextCard").innerHTML = ''
    playerCardsList.pop()
    const newCard = document.createElement("img")
    newCard.src = getRandomCard()
    const nextCard = document.getElementById("nextCard")
    nextCard.appendChild(newCard)
    playerCardsList.push(newCard)
    console.log(playerCardsList)
  }
});

function checkDealCard(){
  if(playerCardsList.length<8){
    dealCard()
  }else if(playerCardsList.length<9){
    dealNextCard()
  }
}

function dealCard() {
  const newCard = document.createElement("img");
  newCard.src = getRandomCard();

  const playersHand = document.getElementById("playersHand");
  playersHand.appendChild(newCard);

  playerCardsList.push(newCard)
   playerCardsList.sort()
  console.log(playerCardsList)
}

function dealNextCard() {
const newCard = document.createElement("img")
newCard.src = getRandomCard()
const nextCard = document.getElementById("nextCard")
nextCard.appendChild(newCard)
playerCardsList.push(newCard)
console.log(playerCardsList)
}

function getRandomCard() {
  const index = Math.floor(Math.random() * decklist.length);
  return decklist[index];
}