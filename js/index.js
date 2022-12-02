// data

import data from "./data.js";
const { blogs } = data;

// toggle navbar
import navbarFunctionality from "./navbar.js";

// audio
import audioFunctionality from "./audio.js";

// home
import home from "./home.js";
const { introFunctionality, createBgEffect } = home;
// home section mouse move effect

// top works cards

import Card from "./Card.js";

const createCards = () => {
  const cardArray = [];
  for (let i = 0; i < 10; i++) {
    const card = new Card("../assets/card-image-1.jpg");
    cardArray.push(card);
  }
};

// BLOG

import Blog from "./Blog.js";

const createBlogs = () => {
  const blogDivs = blogs.map(
    ({ topic, title, content, link }) => new Blog(topic, title, content, link)
  );
};

const init = () => {
  navbarFunctionality();
  audioFunctionality();
  introFunctionality();
  createBgEffect();
  createCards();
  createBlogs();
};

init();

// skill sphere

// const skills = [
//   "HTML",
//   "CSS",
//   "Javascript",
//   "Bootstrap",
//   "React",
//   "GraphQL",
//   "Node",
//   "MongoDB",
//   "ExpressJS",
//   "REST",
//   "Git",
//   "ES6",
//   "NPM",
//   "Sanity.io",
//   "TypeScript",
// ];

// const skillSphere = document.querySelector(".skill-sphere");
// const skillSphereWrapper = document.querySelector(".skill-sphere-wrapper");

// class Skill {
//   constructor(skill) {
//     const skillSpan = document.createElement("span");
//     skillSpan.classList.add("skill");
//     skillSpan.textContent = skill;
//     skillSphere.append(skillSpan);
//     return skillSpan;
//   }
// }

// const skillDivs = skills.map((skill) => new Skill(skill));

// skillSphereWrapper.addEventListener("mousemove", (e) => {
//   const angle = Math.atan(parseInt(e.clientY) / parseInt(e.clientX));

// });
// const animate=()=>{

// }

// requestAnimationFrame(animate)
