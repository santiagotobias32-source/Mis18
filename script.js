// Fecha del evento
const evento = new Date("October 3, 2026 21:00:00").getTime();

const intervalo = setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia = evento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = dias;
    document.getElementById("hours").innerHTML = horas;
    document.getElementById("minutes").innerHTML = minutos;
    document.getElementById("seconds").innerHTML = segundos;

    if (diferencia < 0) {

        clearInterval(intervalo);

        document.querySelector(".countdown").innerHTML = `
            <h2 style="color:#d4af37;">
                🎉 ¡Llegó el gran día! 🎉
            </h2>
        `;

    }

},1000);

// =======================
// CONTADOR
// =======================

const evento = new Date("October 3, 2026 21:00:00").getTime();

const intervalo = setInterval(() => {

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

    if (diferencia < 0) {
        clearInterval(intervalo);
        document.querySelector(".countdown").innerHTML =
        "<h2 style='color:#d4af37'>🎉 ¡Llegó el gran día! 🎉</h2>";
    }

}, 1000);


// =======================
// PANTALLA DE BIENVENIDA
// =======================

const loader = document.getElementById("loader");
const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 700);
});


// =======================
// CONFIRMACIÓN POR WHATSAPP
// =======================

const formulario = document.getElementById("rsvpForm");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = formulario.querySelector('input[type="text"]').value;
    const asistencia = formulario.querySelector("select").value;
    const acompanantes = formulario.querySelector('input[type="number"]').value || "0";
    const cancion = formulario.querySelectorAll('input[type="text"]')[1].value || "Sin sugerencia";
    const mensaje = formulario.querySelector("textarea").value || "Sin mensaje";

    const texto =
`🎉 *Confirmación de Asistencia*

👤 Nombre: ${nombre}
✅ Asistirá: ${asistencia}
👥 Acompañantes: ${acompanantes}
🎵 Canción: ${cancion}
💬 Mensaje: ${mensaje}`;

    const numero = "541128354615";

    window.location.href =
    `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

});


// =======================
// ANIMACIONES
// =======================

const elementos = document.querySelectorAll("section");

function mostrar(){

    elementos.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }

    });

}

elementos.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "1s";

});

window.addEventListener("scroll", mostrar);

mostrar();
