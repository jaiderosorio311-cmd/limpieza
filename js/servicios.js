document.addEventListener("DOMContentLoaded",()=>{

    const cards=document.querySelectorAll(".card-servicio");

    cards.forEach((card,index)=>{

        card.style.opacity="0";
        card.style.transform="translateY(40px)";

        setTimeout(()=>{

            card.style.transition=".6s";

            card.style.opacity="1";
            card.style.transform="translateY(0)";

        },index*120);

    });

});


//responsive de las cajas de servicios 
const contenedor = document.querySelector(".grid-servicios");

const btnAnterior = document.getElementById("anteriorServicio");
const btnSiguiente = document.getElementById("siguienteServicio");

btnSiguiente.addEventListener("click", () => {

    const ancho = contenedor.querySelector(".card-servicio").offsetWidth + 20;

    contenedor.scrollBy({
        left: ancho,
        behavior: "smooth"
    });

});

btnAnterior.addEventListener("click", () => {

    const ancho = contenedor.querySelector(".card-servicio").offsetWidth + 20;

    contenedor.scrollBy({
        left: -ancho,
        behavior: "smooth"
    });

});