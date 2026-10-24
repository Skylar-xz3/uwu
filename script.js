
const sobre = document.getElementById("sobre");
const boton = document.getElementById("abrirCarta");
const flores = document.getElementById("transicionFlores");
const carta = document.getElementById("pantallaCarta");
const textoCarta = document.getElementById("textoCarta");

// Nuestra carta de 4 meses ♡
const mensaje = `For my love....
Felices 4 meses mi amor, mi lindo niño, gracias por hacerme sentir tan feliz todos los días, porque te quiero mucho, la verdad ni yo lo sé explicar, simplemente amo que todo fluya bien entre los dos, gracias por comprender mi vida, por apoyarme, por interesarte por lo que hago, eres la persona que más me escucha en td momento. Perdón si muchas veces no soy lo suficiente o no soy lo que esperas, siempre trato de dar lo mejor de mí, pero hay veces hasta en las que yo me odio demasiado por no hablarte lo suficiente o no demostrar lo mucho que te amo, no quiero que te sientas mal xq te digo esto xq yo misma me he dado cuenta la cgd de actitud que últimamente estoy teniendo, perdón por qué tengas que soportar esto.
Pero quitando de lado todo lo malo, tú nunca me has hecho dudar de tu cariño, y eso es algo que valoro muchísimo de ti, porque incluso cuando yo misma no sé cómo sentirme, tú siempre encuentras la manera de hacerme sentir bien. Amo cómo eres conmigo, nuestras conversaciones, nuestras bromas y hasta las tonterías más pequeñas que compartimos (como los ships del barca VIVA EL FERRANXPEDRI). De verdad me hace muy feliz tenerte en mi vida.
Quizás cuatro meses no parezcan mucho, pero para mí han significado demasiado. Espero que podamos seguir compartiendo muchos momentos bonitos, aprendiendo el uno del otro y queriéndonos cada día más. Quiero estar para ti tanto como tú lo estás para mí, acompañarte en tus días buenos y también en los malos.
Gracias por estos cuatro meses, mi niño precioso, por tu paciencia, por tu cariño y por ser esa personita tan especial para mí. Espero que nunca dudes de lo muchísimo que te amo, porque aunque a veces no sepa demostrarlo, mi cariño por ti es enorme.
Te amo demasiado, mi amor. Felices 4 meses ♡`;

// Escribir letra por letra
function escribirCarta() {
  if (!textoCarta) return;

  textoCarta.textContent = "";
  let posicion = 0;

  function escribir() {
    if (posicion >= mensaje.length) return;

    const letra = mensaje.charAt(posicion);
    textoCarta.textContent += letra;
    posicion++;

    // Mantener visible el texto mientras se escribe
    const pantalla = document.getElementById("pantallaCarta");
    pantalla.scrollTop = pantalla.scrollHeight;

    let velocidad = 25;

    if (letra === ".") velocidad = 200;
    if (letra === ",") velocidad = 90;
    if (letra === "\n") velocidad = 150;

    setTimeout(escribir, velocidad);
  }

  escribir();
}

// Abrir el sobre
boton.addEventListener("click", () => {
  sobre.classList.add("abierto");
  boton.disabled = true;

  // Aparecen las flores
  setTimeout(() => {
    flores.classList.add("activa");
  }, 1200);

  // Aparece el papel antiguo
  setTimeout(() => {
    carta.classList.add("visible");
  }, 2800);

  // Comienza a escribirse nuestra carta
  setTimeout(() => {
    escribirCarta();
  }, 3400);
});
