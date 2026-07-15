const formulario = document.getElementById("formContacto");

const nombre = document.querySelector('input[name="nombre"]');
const correo = document.querySelector('input[name="correo"]');
const telefono = document.querySelector('input[name="telefono"]');
const mensaje = document.querySelector('textarea[name="mensaje"]');

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    limpiarErrores();

    let valido = true;

    // Nombre

    if(nombre.value.trim().length < 3){

        error(nombre,"Ingrese un nombre válido.");

        valido = false;

    }

    // Correo

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!correoRegex.test(correo.value.trim())){

        error(correo,"Correo electrónico inválido.");

        valido = false;

    }

    // Teléfono

    const telefonoRegex = /^[0-9+\-\s]{7,20}$/;

    if(telefono.value.trim() != ""){

        if(!telefonoRegex.test(telefono.value.trim())){

            error(telefono,"Número de teléfono inválido.");

            valido = false;

        }

    }

    // Mensaje

    if(mensaje.value.trim().length < 15){

        error(mensaje,"El mensaje debe tener al menos 15 caracteres.");

        valido = false;

    }

    if(valido){

        alert("Formulario válido. Enviando información...");

        formulario.submit();

    }

});

function error(input,texto){

    input.classList.add("input-error");

    input.placeholder = texto;

    input.value="";

}

function limpiarErrores(){

    document.querySelectorAll(".input-error").forEach(input=>{

        input.classList.remove("input-error");

    });

}