//creating new variables
let menuIcon = document.querySelector('.icon');
let closeIcon = document.querySelector('.icon2');
let popUpMenu = document.querySelector('.popUpMenu');
let heading = document.querySelector('.projectsHeadings');
let menuOptions = document.querySelectorAll('.menuOption');

const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    heading.classList.add('animate');
  }
}, {
  threshold: 0.2
});

observer.observe(heading);


//creating a function to toggle the menu
function closeMenu() {
    //checking if the menu is open
    if (popUpMenu.style.display ===  'flex'){
            popUpMenu.style.display = 'none';
            closeIcon.style.display = 'none';
            menuIcon.style.display = 'flex';
    }}

    function openMenu() {
        if (popUpMenu.style.display === 'none' || popUpMenu.style.display === '') {
            popUpMenu.style.display = 'flex';
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'flex';
            }
        }

// Attach the event listener once
menuIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click',  closeMenu);
menuOptions.forEach((menuOption) =>{ menuOption.addEventListener('click', closeMenu); });

//creating a classthat represents a ticket
//creating a variable that holds the tickets

class Ticket{
    name;
    email;
    message;
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }

    //function to
}