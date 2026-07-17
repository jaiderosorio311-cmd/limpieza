const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const enlaces = document.querySelectorAll(".nav a");

// Abrir / cerrar menú
menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");
    nav.classList.toggle("active");

});

// Cerrar menú al hacer clic en una opción
enlaces.forEach(enlace => {

    enlace.addEventListener("click", () => {

        if(window.innerWidth <= 900){

            menuBtn.classList.remove("active");
            nav.classList.remove("active");

        }

    });

});

// Si cambia el tamaño de la ventana
window.addEventListener("resize", () => {

    if(window.innerWidth > 900){

        menuBtn.classList.remove("active");
        nav.classList.remove("active");

    }

});