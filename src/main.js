//creating new variables
let menuIcon = document.querySelector('.icon');
let closeIcon = document.querySelector('.icon2');
let popUpMenu = document.querySelector('.popUpMenu');

//creating a function to toggle the menu
function closeMenu() {
    //checking if the menu is open
    if (popUpMenu.style.display ===  'flex'){
            popUpMenu.style.display = 'none';
            closeIcon.style.display = 'none';
            menuIcon.style.display = 'flex';
            document.body.style.position = 'fixed';
            document.body.style.overflow = 'hidden';
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