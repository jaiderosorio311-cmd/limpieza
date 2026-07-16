const contenedor = document.querySelector(".grid-servicios");

const btnAnterior = document.getElementById("anteriorServicio");
const btnSiguiente = document.getElementById("siguienteServicio");

btnSiguiente.addEventListener("click", () => {

    const ancho = contenedor.querySelector(".card-servicio").offsetWidth + 20;

    // ¿Está en la última tarjeta?
    if (contenedor.scrollLeft + contenedor.clientWidth >= contenedor.scrollWidth - 5) {

        contenedor.scrollTo({
            left: 0,
            behavior: "smooth"
        });

    } else {

        contenedor.scrollBy({
            left: ancho,
            behavior: "smooth"
        });

    }

});

btnAnterior.addEventListener("click", () => {

    const ancho = contenedor.querySelector(".card-servicio").offsetWidth + 20;

    // ¿Está al principio?
    if (contenedor.scrollLeft <= 0) {

        contenedor.scrollTo({
            left: contenedor.scrollWidth,
            behavior: "smooth"
        });

    } else {

        contenedor.scrollBy({
            left: -ancho,
            behavior: "smooth"
        });

    }

});