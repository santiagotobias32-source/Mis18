// =========================
// CONTADOR
// =========================

const evento = new Date("October 3, 2026 21:00:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();
    const diferencia = evento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = dias;
    document.getElementById("hours").textContent = horas;
    document.getElementById("minutes").textContent = minutos;
    document.getElementById("seconds").textContent = segundos;

}, 1000);


// =========================
// BOTÓN ABRIR INVITACIÓN
// =========================

const loader = document.getElementById("loader");
const enterButton = document.getElementById("enterButton");

if (enterButton) {

    enterButton.addEventListener("click", () => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    });

}


// =========================
// FORMULARIO -> WHATSAPP
// =========================

const formulario = document.getElementById("rsvpForm");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const nombre = formulario.querySelector('input[type="text"]').value;

        const asistencia = formulario.querySelector("select").value;

        const acompanantes = formulario.querySelector('input[type="number"]').value || "0";

        const cancion = formulario.querySelectorAll('input[type="text"]')[1].value || "No indicó";

        const mensaje = formulario.querySelector("textarea").value || "Sin mensaje";

        const texto =
`🎉 *Confirmación de Asistencia*

👤 Nombre: ${nombre}
✅ Asistirá: ${asistencia}
👥 Acompañantes: ${acompanantes}
🎵 Canción: ${cancion}
💬 Mensaje: ${mensaje}`;

        const numero = "541128354615";

        window.open(
            `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`,
            "_blank"
        );

    });

}


// =========================
// ANIMACIONES
// =========================

const secciones = document.querySelectorAll("section");

function mostrar() {

    secciones.forEach(sec => {

        if (sec.getBoundingClientRect().top < window.innerHeight - 120) {

            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";

        }

    });

}

secciones.forEach(sec => {

    sec.style.opacity = "0";
    sec.style.transform = "translateY(60px)";
    sec.style.transition = "1s";

});

window.addEventListener("scroll", mostrar);

mostrar();
