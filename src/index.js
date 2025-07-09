import restaurantImage from "./pictures/restaurant.webp";
import pizzaImage from "./pictures/pizzaImage.webp";
import spaguettiImage from "./pictures/spaguetti.jpg";
import tiramisuImage from "./pictures/tiramisu.webp";
import "./styles.css"; // Importing the CSS file

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const content = document.getElementById("content");

function contentHome() {
    content.innerHTML = ""; // Clear previous content

    const container = document.createElement("div")
    container.classList.add("container");

    const introSection = document.createElement("section");
    introSection.classList.add("intro-section");
    introSection.innerHTML =
        `<h1>Home</h1>
            <p>Welcome to Giancarlo's Restaurant.</p>
            <p>We are delighted to serve you the best Italian cuisine in town.</p>
            <img src="${restaurantImage}" alt="Home Image">
            <p>Join us for a delightful dining experience!</p>
    `;

    const hoursSection = document.createElement("section");
    hoursSection.classList.add("hours-section");
    hoursSection.innerHTML = `
    <h2>Opening Hours</h2>
    <ul>
        <li>Monday: 11:00 AM - 10:00 PM</li>
        <li>Tuesday: 11:00 AM - 10:00 PM</li>
        <li>Wednesday: 11:00 AM - 10:00 PM</li>
        <li>Thursday: 11:00 AM - 10:00 PM</li>
        <li>Friday: 11:00 AM - 11:00 PM</li>
        <li>Saturday: 12:00 PM - 11:00 PM</li>
        <li>Sunday: Closed</li>
    </ul>
    `;

    const contactSection = document.createElement("section");
    contactSection.classList.add("contact-section");
    contactSection.innerHTML = `
    <h2>Location</h2>
    <p>1234 Culinary Lane, Foodie City, FC 56789</p>
    <p>We are located in the heart of Foodie City, easily accessible by public transport and with ample parking space.</p>
    <p>For reservations, please call us at (123) 456-7890.</p>
    `;

    container.appendChild(introSection);
    container.appendChild(hoursSection);
    container.appendChild(contactSection);
    content.appendChild(container);

}

function contentMenu() {
    content.innerHTML = ""; // Clear previous content

   const container = document.createElement("div");
    container.classList.add("container");

    // Main menu section
    const menuSection = document.createElement("section");
    menuSection.classList.add("menu-section");
    menuSection.innerHTML = `
        <h1>Menu</h1>
        <p>Explore our delicious menu featuring a variety of Italian dishes.</p>
    `;

     const pizzaSection = document.createElement("section");
    pizzaSection.classList.add("menu-pizza");
    pizzaSection.innerHTML = `
        <h2>Pizza</h2>
        <ul>
            <li>Margherita Pizza - $12.99</li>
            <li>Pepperoni Pizza - $14.99</li>
            <li>Vegetarian Pizza - $13.99</li>
            <li>BBQ Chicken Pizza - $15.99</li>
            <li>Four Cheese Pizza - $16.99</li>  
        </ul>
        <img src="${pizzaImage}" alt="Pizza Image" width="200" height="150">
    `;
    
   const pastaSection = document.createElement("section");
    pastaSection.classList.add("menu-pasta");
    pastaSection.innerHTML = `
        <h2>Pasta</h2>
        <ul>
            <li>Spaghetti Carbonara - $11.99</li>
            <li>Fettuccine Alfredo - $12.99</li>
            <li>Penne Arrabbiata - $10.99</li>
            <li>Lasagna - $13.99</li>
            <li>Ravioli - $14.99</li> 
        </ul> 
        <img src="${spaguettiImage}" alt="Spaghetti Image" width="200" height="150">
    `;

   const dessertSection = document.createElement("section");
    dessertSection.classList.add("menu-desserts");
    dessertSection.innerHTML = `
        <h2>Desserts</h2>
        <ul>
            <li>Tiramisu - $6.99</li>
            <li>Panna Cotta - $5.99</li>
            <li>Gelato - $4.99</li>
            <li>Chocolate Lava Cake - $7.99</li>
            <li>Fruit Tart - $5.99</li>  
        </ul>
        <img src="${tiramisuImage}" alt="Tiramisu Image" width="200" height="150">
    `;

    // Append sections to the container
    container.appendChild(menuSection);
    container.appendChild(pizzaSection);
    container.appendChild(pastaSection);
    container.appendChild(dessertSection);
    content.appendChild(container);
}

function contentAbout() {
    content.innerHTML = ""; // Clear previous content

    const container = document.createElement("div");
    container.classList.add("container");

    const aboutSection = document.createElement("section");
    aboutSection.classList.add("about-section");
    aboutSection.innerHTML = `
        <h1>About Us</h1>
        <p>Giancarlo's Restaurant has been serving authentic Italian cuisine since 1995. Our chef, Giancarlo, brings traditional recipes from his hometown in Italy, ensuring every dish is made with love and passion.</p>
        <p>We believe in using the freshest ingredients and traditional cooking methods to create a memorable dining experience for our guests.</p>
        <p>Join us for a meal and experience the taste of Italy right here in Foodie City!</p>
    `;

    container.appendChild(aboutSection);
    content.appendChild(container);
}

contentHome(); // Load home content by default

home.addEventListener("click", contentHome);
menu.addEventListener("click", contentMenu);
about.addEventListener("click", contentAbout);