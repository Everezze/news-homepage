const hamburgerMenu = document.querySelector(".ham-menu");
const deskMenu = document.querySelector(".desk-menu");
const crossButton = document.querySelector(".cross-button");
//console.log(crossButton);

hamburgerMenu.addEventListener("click", function(){
    deskMenu.classList.toggle("display_el");
});

crossButton.addEventListener("click",function(){
    deskMenu.classList.toggle("display_el");
});
