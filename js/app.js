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
let menuList = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();
const navBar = document.getElementById("navbar__list");

for (let i = 0; i < menuList.length; i++) {
  let menuItem = document.createElement("li");
  menuItem.classList.add("menu__link");
  let menuAnchor = menuList[i];
  menuItem.innerText = menuList[i].getAttribute("data-nav");
  menuItem.addEventListener("click", function() {
    menuAnchor.scrollIntoView();
  });
  fragment.appendChild(menuItem);
  // console.log(menuList[i].getAttribute("data-nav"));
}

navBar.appendChild(fragment);




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

// build the nav


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
