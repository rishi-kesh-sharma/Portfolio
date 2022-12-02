const introFunctionality = () => {
  const introh1 = document.querySelector(".intro");

  const introText = "Hi, I'm Rishi, web developer";

  const introTextArray = introText.split("");
  const spanElements = introTextArray.map((character) => {
    const span = document.createElement("span");
    span.textContent = character;
    span.classList.add("intro-character");
    return span;
  });

  const animateText = (e) => {
    e.target.classList.add("animated");
  };
  const removeAnimation = (e) => {
    //   e.target.removeEventListener("mouseover", animateText);
    e.target.classList.remove("animated");
  };
  spanElements.forEach((spanElement, index) => {
    introh1.append(spanElement);
    if (spanElement.textContent == "," || index == spanElement.length - 1) {
      const br = document.createElement("br");
      introh1.append(br);
    }
    if (spanElement.textContent === "R") {
      spanElement.classList.add("special-text");
      return;
    }
    if (spanElement.textContent == " ") {
      return;
    }
    spanElement.addEventListener("mouseover", animateText);
    spanElement.addEventListener("mouseout", removeAnimation);
  });
};

const createBgEffect = () => {
  const homeSection = document.querySelector(".home-section");
  homeSection.addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY);
  });

  // create skills
};
export default { introFunctionality, createBgEffect };
