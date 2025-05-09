//Menu Responsive

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

// Verifica si el botón existe antes de añadir el evento
  document.addEventListener("DOMContentLoaded", function () {
    const btnEnviado = document.getElementById("btnEnviar");

    if (btnEnviado) {
        btnEnviado .addEventListener("click", function (e) {
            e.preventDefault(); // Evita el salto inmediato

            Swal.fire({
                title: "Enviado!",
                text: "Muchas gracias por contactarte",
                imageUrl: "./assets/capiok.png",
                imageWidth: 400,
                imageHeight: 400,                
                imageAlt: "Custom image",
                confirmButtonText: "Continuar",
                confirmButtonColor: "#b88b66",
               
              });
               // Limpia el formulario
            const form = document.getElementById("form-contacto"); // Asegúrate de usar el ID correcto
            if (form) {
                form.reset();
            }
             
        });
        
    }
   
});
 