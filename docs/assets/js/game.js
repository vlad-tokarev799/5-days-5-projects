const BOARD_SIZES={x:40,y:20},SQUARE_WIDTH=20,squaresNumber=BOARD_SIZES.x*BOARD_SIZES.y,board=document.querySelector("#board");board.style.width=SQUARE_WIDTH*BOARD_SIZES.x+"px";for(let o=0;o<squaresNumber;o++){const b=document.createElement("div");b.classList.add("square"),b.addEventListener("mouseover",setColor),b.addEventListener("mouseleave",removeColor),board.append(b)}function setColor(){var o=generateRandomColor();this.style.backgroundColor=o,this.style.boxShadow=`0 0 2px ${o}, 0 0 10px `+o}function removeColor(){this.style=""}function getColor(){return colors[Math.floor(Math.random()*colors.length)]}function generateRandomColor(){return`rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`}function randomNumber(o){return Math.round(Math.random()*o)}