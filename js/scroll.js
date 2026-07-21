const elementos = document.querySelectorAll(
".reveal,.reveal-left,.reveal-right,.reveal-scale"
);

function mostrarElementos(){

    const alto = window.innerHeight;

    elementos.forEach((elemento)=>{

        const posicion = elemento.getBoundingClientRect().top;

        if(posicion < alto - 100){

            elemento.classList.add("active");

        }

    });

}

window.addEventListener("scroll",mostrarElementos);

mostrarElementos();


