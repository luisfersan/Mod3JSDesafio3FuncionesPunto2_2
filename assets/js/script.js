// Obtengo la referencia al elemento por su ID
const ele = document.getElementById("ele1");

// Agrego un listener de evento para capturar el clic y cambiar el color de fondo
ele.addEventListener("click", function() {
    // Dentro de la función anónima, 'this' se refiere al elemento que ha sido clickeado
    this.style.backgroundColor = 'yellow';
});
