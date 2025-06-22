function dealCard(){
    const newCard = document.createElement("img");
newCard.setAttribute("src","img/Pixle Osaka Tile.png")

const playersHand = document.getElementById("playersHand");
playersHand.appendChild(newCard);
}