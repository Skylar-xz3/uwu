const sobre = document.getElementById("sobre");
const boton = document.getElementById("abrirCarta");
const flores = document.getElementById("transicionFlores");
const carta = document.getElementById("pantallaCarta");

boton.addEventListener("click", () => {
  // Abrir el sobre
  sobre.classList.add("abierto");
  boton.disabled = true;

  // Mostrar las flores
  setTimeout(() => {
    flores.classList.add("activa");
  }, 1300);

  // Revelar la carta detrás de las flores
  setTimeout(() => {
    carta.classList.add("visible");
  }, 2600);
});
