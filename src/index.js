import restaurantImage from "./pictures/restaurant.webp";

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const content = document.getElementById("content");

function contentHome() {
  content.innerHTML = `
    <h1>Home</h1>
    <p>Welcome to Giancarlo's Restaurant.</p>
    <p>We are delighted to serve you the best Italian cuisine in town.</p>
    <img src="${restaurantImage}" alt="Home Image">
  `;
}


contentHome();

console.log()