/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();
const navBar = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// Build The Nav
sections.forEach((elm) => {
  let menuItem = document.createElement("li"); //create li elements
  menuItem.classList.add("menu__link"); //adding menu__link class to each menu item
  menuItem.innerText = elm.getAttribute("data-nav"); //naming menu items
  elm.classList.remove("your-active-class"); //removing any active section styling
  menuItem.addEventListener("click", () => {
    elm.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); //scrolling to the corresponding section
  });
  fragment.appendChild(menuItem); //adding all menu item li elements to the fragment
});
navBar.appendChild(fragment); //adding the list items to the navbar ul


// Active Section Styling
let menuItems = document.querySelectorAll("#navbar__list li");

window.addEventListener("scroll", () => {
  sections.forEach((elm) => {
    let sectionTop = elm.getBoundingClientRect().top;
    sectionTop <= 100 && sectionTop >= -250 ? elm.classList.add("your-active-class") : elm.classList.remove("your-active-class");
    if (elm.classList.contains("your-active-class")) {
      console.log(elm.getAttribute("data-nav"));
    }
  });
});


//Active Navbar Items
window.addEventListener("scroll", () => {
  menuItems.forEach((item) => {
    sections.forEach((sec) => {
      if (sec.classList.contains("your-active-class")) {
        if (sec.getAttribute("data-nav") === item.innerText) {
          item.classList.add("active__link");
        }
        else {
          item.classList.remove("active__link");
        }
      }
    })
  });
})

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 *
*/
// Build menu
// Scroll to section on link click
// Set sections as active
