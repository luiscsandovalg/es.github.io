<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $ciudad = $_POST["ciudad"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $destino = "expedientesecreto1@gmail.com"; // Reempl dirección de correo electrónico

    $asunto = "Nuevo mensaje de contacto desde tu sitio web";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Ciudad: $ciudad\n";
    $contenido .= "Correo Electrónico: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje";

    mail($destino, $asunto, $contenido);

    echo "Mensaje enviado exitosamente. Nos pondremos en contacto contigo pronto. By Equipo Expediente Secreto";
} else {
    echo "Error al procesar la solicitud.";
}
?>

