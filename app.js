// 1. Select elements from DOM
const pageTitle = document.getElementById("page-title");
const subtitle = document.getElementById("subtitle");
const changeTitleBtn = document.getElementById("change-title-btn");
const colorBtn = document.getElementById("color-btn");
const increaseFontBtn = document.getElementById("increase-font-btn");
const decreaseFontBtn = document.getElementById("decrease-font-btn");
const toggleSubtitleBtn = document.getElementById("toggle-subtitle-btn");
const makeSubtitleBoldBtn = document.getElementById("make-subtitle-bold-btn");
const addBorderTitleBtn = document.getElementById("add-border-title-btn");
const addCardBtn = document.getElementById("add-card-btn");
const addCustomCardBtn = document.getElementById("add-custom-card-btn");
const clearCardsBtn = document.getElementById("clear-cards-btn");
const customTextInput = document.getElementById("custom-text-input");
const cardsContainer = document.getElementById("cards-container");

changeTitleBtn.addEventListener("click", () => {
  if (pageTitle.innerText === "DOM Manipulation Playground") {
    pageTitle.innerText = "DOM in Action";
    subtitle.innerText = "Nice! You changed the DOM using JavaScript!";
  } else {
    pageTitle.innerText = "DOM Manipulation Playground";
    subtitle.innerText = "Click buttons below to see the DOM actions";
  }
});


colorBtn.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});


increaseFontBtn.addEventListener("click", () => {
  const style = window.getComputedStyle(document.body);
  const currentSize = parseFloat(style.fontSize);
  document.body.style.fontSize = (currentSize + 2) + "px";
});

decreaseFontBtn.addEventListener("click", () => {
  const style = window.getComputedStyle(document.body);
  const currentSize = parseFloat(style.fontSize);
  if (currentSize > 10) {
    document.body.style.fontSize = (currentSize - 2) + "px";
  }
});

// Toggle subtitle visibility
toggleSubtitleBtn.addEventListener("click", () => {
  subtitle.classList.toggle("hidden");
});

// Toggle subtitle bold styling
makeSubtitleBoldBtn.addEventListener("click", () => {
  subtitle.classList.toggle("bold");
});

// Toggle border on the title
addBorderTitleBtn.addEventListener("click", () => {
  pageTitle.classList.toggle("bordered");
});



function createCard(text) {
  const card = document.createElement("div");
  card.className = "card";
  const content = document.createElement("p");
  content.innerText = text;
  card.appendChild(content);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete Card";
  deleteBtn.addEventListener("click", () => card.remove());
  card.appendChild(deleteBtn);
  return card;
}

// 10. Add predefined card
addCardBtn.addEventListener("click", () => {
  const card = createCard("I am a dynamically created card");
  cardsContainer.appendChild(card);
});

// 11. Add custom text card
addCustomCardBtn.addEventListener("click", () => {
  const value = customTextInput.value.trim();
  if (!value) return;
  const card = createCard(value);
  cardsContainer.appendChild(card);
  customTextInput.value = "";
});

// 12. Clear all cards
clearCardsBtn.addEventListener("click", () => {
  cardsContainer.innerHTML = "";
});

