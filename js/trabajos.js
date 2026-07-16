const galeria = document.querySelector(".galeria-trabajos");
const tarjetas = document.querySelectorAll(".trabajo");

const siguiente = document.getElementById("siguienteTrabajo");
const anterior = document.getElementById("anteriorTrabajo");

let indice = 0;

function mover(){

    galeria.scrollTo({

        left: tarjetas[indice].offsetLeft,

        behavior:"smooth"

    });

}

siguiente.addEventListener("click",()=>{

    if(indice < tarjetas.length-1){

        indice++;

    }else{

        indice = 0;

    }

    mover();

});

anterior.addEventListener("click",()=>{

    if(indice > 0){

        indice--;

    }else{

        indice = tarjetas.length-1;

    }

    mover();

});