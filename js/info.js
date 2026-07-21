const acordeones = document.querySelectorAll(".acordeon");

acordeones.forEach(acordeon => {

    const boton = acordeon.querySelector(".acordeon-btn");

    boton.addEventListener("click", () => {

        const contenido = acordeon.querySelector(".acordeon-contenido");

        const abierto = acordeon.classList.contains("active");

        // Cerrar todos
        acordeones.forEach(item => {

            item.classList.remove("active");

            const c = item.querySelector(".acordeon-contenido");

            c.style.maxHeight = "0px";

            c.style.overflowY = "hidden";

        });

        // Si estaba cerrado, abrirlo
        if(!abierto){

            acordeon.classList.add("active");

            const altura = contenido.scrollHeight;

            // Si el contenido es muy alto, limitarlo
            if(altura > 550){

                contenido.style.maxHeight = "550px";

                contenido.style.overflowY = "auto";

            }else{

                contenido.style.maxHeight = altura + "px";

                contenido.style.overflowY = "hidden";

            }

        }

    });

});