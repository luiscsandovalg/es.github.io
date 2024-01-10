// BOTÓN IR ARRIBA:
// Mostrar el botón cuando el usuario se desplaza hacia abajo 20px desde la parte superior del documento
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("ir-arriba").style.display = "block";
    } else {
        document.getElementById("ir-arriba").style.display = "none";
    }
}

// Cuando el usuario hace clic en el botón, desplácese hasta la parte superior del documento
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// función para desplazarse hacia arriba cuando se hace clic en el botón
function showFloatingWindow(page) {
    const width = 900; // ancho personalizado
    const height = 900; // altura personalizada
    const left = screen.width / 2 - width / 2; // Centra la ventana emergente en el eje X
    const top = screen.height / 2 - height / 2; // Centra la ventana emergente en el eje Y
    const specs = `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars=yes,location=yes`; // Especifica los atributos para la ventana emergente
    window.open(page, '_blank', specs); // Abre la página en una ventana emergente con los atributos especificados
}

////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('miFormulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        fetch('guardar_datos.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});