// Fecha del evento
const evento = new Date("October 3, 2026 21:00:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();
    const diferencia = evento - ahora;

    document.getElementById("days").innerHTML = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML = Math.floor((diferencia % (1000 * 60)) / 1000);

}, 1000);

// Pantalla de bienvenida
document.getElementById("enterButton").onclick = function () {

    document.getElementById("loader").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 700);

};

// Confirmación por WhatsApp
document.getElementById("rsvpForm").addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const asistencia = document.getElementById("asistencia").value;
    const acompanantes = document.getElementById("acompanantes").value || "0";
    const cancion = document.getElementById("cancion").value || "-";
    const mensaje = document.getElementById("mensaje").value || "-";

    const texto =
`🎉 *Confirmación de Asistencia* 🎉

👤 Nombre: ${nombre}
✅ Asistirá: ${asistencia}
👥 Acompañantes: ${acompanantes}
🎵 Canción: ${cancion}
💬 Mensaje: ${mensaje}`;

    window.open(
        "https://wa.me/541128354615?text=" + encodeURIComponent(texto),
        "_blank"
    );

});
