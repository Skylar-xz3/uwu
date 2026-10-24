
const sobre = document.getElementById("sobre");
const boton = document.getElementById("abrirCarta");
const flores = document.getElementById("transicionFlores");
const carta = document.getElementById("pantallaCarta");

boton.addEventListener("click", () => {
  sobre.classList.add("abierto");
  boton.disabled = true;

  // Las flores empiezan después de abrir el sobre
  setTimeout(() => {
    flores.classList.add("activa");
  }, 1200);

  // La carta aparece detrás de las flores
  setTimeout(() => {
    carta.classList.add("visible");
  }, 2800);
});
