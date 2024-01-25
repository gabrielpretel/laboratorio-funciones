let turno: number = 1;

const numeroPantalla = document.getElementsByClassName("numero-turno")[0];
// 

console.log(typeof numeroPantalla);

function sumaTurno(): void {
  turno++;
  numeroPantalla.innerHTML = turno.toString().padStart(2, "0");
}
const botonSiguiente = document.getElementById(
  "siguiente"
) as HTMLButtonElement;

botonSiguiente.addEventListener("click", () => sumaTurno());

function restaTurno(): void {
  if (turno > 1) {
    turno--;
  }
  numeroPantalla.innerHTML = turno.toString().padStart(2, "0");
}
const botonAnterior = document.getElementById("anterior") as HTMLButtonElement;

botonAnterior.addEventListener("click", () => restaTurno());

function reset() {
  turno = 0;
  numeroPantalla.innerHTML = turno.toString().padStart(2, "0");
}

const botonReset = document.getElementById("reset") as HTMLButtonElement;
botonReset.addEventListener("click", () => reset());

// Botón para que el operario pueda cambiar el turno a uno en concreto

const valorInput = document.getElementById("personalizado") as HTMLInputElement;

function cambiarNumero() {
  turno = parseInt(valorInput.value);
  numeroPantalla.innerHTML = turno.toString().padStart(2, "0");
}

const botonCambiar = document.getElementById(
  "boton-cambiar"
) as HTMLButtonElement;
botonCambiar.addEventListener("click", () => cambiarNumero());
