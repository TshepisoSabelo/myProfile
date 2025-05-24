//creating new variables
let menuIcon = document.querySelector('.bx.bx-menu');
let popUpMenu = document.querySelector('.popUpMenu');

//creating a function to toggle the menu
function toggleMenu() {
    //checking if the menu is open
    if (popUpMenu.style.display ===  'flex'){
        menuIcon.addEventListener('click', function() {
            popUpMenu.display = 'none';
    })}
    else{
        menuIcon.addEventListener('click', function() {
            popUpMenu.style.display = 'flex';
            })
        }
    }

    // Attach the event listener once
menuIcon.addEventListener('click', toggleMenu);