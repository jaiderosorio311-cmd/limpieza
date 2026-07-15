// Obtener elementos
const formulario = document.getElementById("formContacto");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");

const btnCesar = document.getElementById("btnCesar");
const btnIngrid = document.getElementById("btnIngrid");

// Evitar que el formulario intente enviarse
formulario.addEventListener("submit", function(e){
    e.preventDefault();
});

// Validación
function validarFormulario(){

    limpiarErrores();

    let valido = true;

    if(nombre.value.trim().length < 3){
        mostrarError(nombre, "Ingrese un nombre válido");
        valido = false;
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regexCorreo.test(correo.value.trim())){
        mostrarError(correo, "Correo inválido");
        valido = false;
    }

    if(telefono.value.trim() !== ""){

        const regexTelefono = /^[0-9+\-\s]{7,20}$/;

        if(!regexTelefono.test(telefono.value.trim())){
            mostrarError(telefono, "Teléfono inválido");
            valido = false;
        }

    }

    if(mensaje.value.trim().length < 15){
        mostrarError(mensaje, "Escriba un mensaje más detallado");
        valido = false;
    }

    return valido;

}

// Construye el texto del correo
function crearMensaje(){

    return `
Nombre: ${nombre.value}

Correo: ${correo.value}

Teléfono: ${telefono.value}

Mensaje:

${mensaje.value}
`;

}

// Abrir cliente de correo
function enviarCorreo(destinatario){

    if(!validarFormulario()) return;

    const asunto = encodeURIComponent("Solicitud de información");

    const cuerpo = encodeURIComponent(crearMensaje());

    window.location.href =
        `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;

}

// Botón César
btnCesar.addEventListener("click", function(){

    enviarCorreo("Julocesar1979@hotmail.com");

});

// Botón Ingrid
btnIngrid.addEventListener("click", function(){

    enviarCorreo("Ingridominguez1994@gmail.com");

});

// Mostrar error
function mostrarError(input, texto){

    input.classList.add("input-error");

    input.value = "";

    input.placeholder = texto;

}

// Limpiar errores
function limpiarErrores(){

    document.querySelectorAll(".input-error").forEach(function(input){

        input.classList.remove("input-error");

    });

}
