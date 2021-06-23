# Landing Page Project

Creating landing page with dynamic navigation bar and active styling of sections on scroll

## Global Variables

* Document Fragment
* Sections
* Nav Bar List
* Burger Menu
* Burger Mobile Menu List

## Functions

* [menuListCreation](#menuListCreation)
* [Active Section Styling](#active-section-styling)
* [activeNavStyle](#activeNavStyle)

## menuListCreation

* Used to select through the sections with their data-nav attribute
* Creates menu items with names similar to the data-nav or section titles
* Adds the menu items to a fragment to enhance performance
* Appends the menu items to the desktop or mobile navigation list
* Desktop or mobile nav menu are added as arguments

## Active Section Styling

* This is an anonymous function
* When scrolling through the window it gets the top section y-coordinate
* If the section is withing a certain viewport the section is styles differently (to show it is the active section)
* Otherwise the active style is removed and added to the relevant section if it's withing a certain viewport

## activeNavStyle

* Checks which section is active
* Adds an active style to the nav menu item (desktop or mobile) when a certain section is active
* Desktop or mobile menu items list are added as arguments
