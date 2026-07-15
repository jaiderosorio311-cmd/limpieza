const slides = document.querySelectorAll(".slide");

let actual = 0;

function cambiarImagen(){

    slides[actual].classList.remove("active");

    actual++;

    if(actual >= slides.length){

        actual = 0;

    }

    slides[actual].classList.add("active");

}

setInterval(cambiarImagen,3000);