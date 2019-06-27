class Card {
  constructor(domEl) {
    this.domEl = domEl;
    this.openButton= domEl.querySelector(".open");
    this.closeButton = domEl.querySelector(".close");
  
    this.openButton.addEventListener("click", () => this.expandCard());
    this.closeButton.addEventListener("click", () => this.closeCard());
  }

  expandCard() {
    this.domEl.classList.toggle("open-card");
    this.openButton.classList.toggle("hide-btn");
  }

  closeCard() {
    this.domEl.classList.toggle("open-card");
    this.openButton.classList.toggle("hide-btn");
    
  }
}

let solutionCards = document.querySelectorAll(".card-selected");

solutionCards.forEach( (solution) => {
  return new Card(solution);
})