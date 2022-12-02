const cardContainer = document.querySelector(".top-works-cards");

class Card {
  constructor(image) {
    this.image = image;
    const card = document.createElement("div");
    const img = document.createElement("img");
    card.classList.add("card-item");
    img.classList.add("card-image");
    img.src = this.image;
    card.append(img);
    cardContainer.append(card);
    return card;
  }
}

export default Card;
