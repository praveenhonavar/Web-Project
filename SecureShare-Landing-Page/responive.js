const menu = document.querySelector(".menu")
const navItmes = document.querySelector(".nav-items")

menu.addEventListener("click",()=>{
    navItmes.classList.toggle('show');
})

