const galeria = document.querySelector(".galeria-trabajos");

const siguiente = document.getElementById("siguienteTrabajo");
const anterior = document.getElementById("anteriorTrabajo");

siguiente.addEventListener("click", () => {

    const ancho = galeria.querySelector(".trabajo").offsetWidth + 20;

    // Si está al final vuelve al inicio
    if (galeria.scrollLeft + galeria.clientWidth >= galeria.scrollWidth - 5) {

        galeria.scrollTo({
            left: 0,
            behavior: "smooth"
        });

    } else {

        galeria.scrollBy({
            left: ancho,
            behavior: "smooth"
        });

    }

});

anterior.addEventListener("click", () => {

    const ancho = galeria.querySelector(".trabajo").offsetWidth + 20;

    // Si está al inicio va al final
    if (galeria.scrollLeft <= 0) {

        galeria.scrollTo({
            left: galeria.scrollWidth,
            behavior: "smooth"
        });

    } else {

        galeria.scrollBy({
            left: -ancho,
            behavior: "smooth"
        });

    }

});