  
const cardBoard = document.querySelector("#cardboard");
const imgs = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg"
];

let cardHTML = "";

imgs.forEach(img => {
  cardHTML += `<div class="memory-card" data-card="${img}">
    <img class="front-face" src="img/${img}"/>
    <img class="back-face" src="img/back.jpg">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML;

/** Fim da Renderização HTML */

