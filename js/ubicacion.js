const acordeones = document.querySelectorAll(".acordeon");

acordeones.forEach(acordeon => {

    const boton = acordeon.querySelector(".acordeon-btn");

    boton.addEventListener("click", () => {

        const contenido = acordeon.querySelector(".acordeon-contenido");

        const abierto = acordeon.classList.contains("active");

        acordeones.forEach(item => {

            item.classList.remove("active");

            item.querySelector(".acordeon-contenido").style.maxHeight = null;

        });

        if(!abierto){

            acordeon.classList.add("active");

            contenido.style.maxHeight = contenido.scrollHeight + "px";

        }

    });

});