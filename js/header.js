const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");

    nav.classList.toggle("active");

});