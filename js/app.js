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
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();
const navBar = document.getElementById("navbar__list");

for (let i = 0; i < sections.length; i++) {
  let menuItem = document.createElement("li");
  // let menuAnchor = sections[i];
  menuItem.classList.add("menu__link");
  menuItem.innerText = sections[i].getAttribute("data-nav");
  menuItem.addEventListener("click", function() {
    sections[i].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    let section = menuItem.innerText;
    console.log(section);
    // let sectionTop = sections[i].getBoundingClientRect().top;
    // console.log(sectionTop);
  });
  fragment.appendChild(menuItem);
  // console.log(menuList[i].getAttribute("data-nav"));
}

navBar.appendChild(fragment);


let navItems = document.querySelectorAll("#navbar__list li");
navItems.forEach((elm, i, arr) => {
  elm.addEventListener("click", () => {
    if (elm === )
  })
});

// let section = document.querySelector("section");
// let section1Item = document.querySelector(".navbar__menu li");
// section1Item.addEventListener("click", () => {
//   section.scrollIntoView();
//   let sectionTop = section.getBoundingClientRect().top;
//   console.log(sectionTop);
// })

// console.log(sectionTop);
// if (sectionTop <= 0 && sectionTop >= -250) {
//   alert('Holaaaaaaaaaaa');
// };

// sections.forEach((elem, i, arr) => {
//   let sectionTop = elem.getBoundingClientRect().top;
//   if (sectionTop >= -250 && sectionTop <= 0) {
//     elem.style.backgroundColor = "red";
//   }
// });


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
