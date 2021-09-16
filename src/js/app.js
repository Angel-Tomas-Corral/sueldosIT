var boton = document.querySelector('.btn-off');
boton.addEventListener("click", clicked);

var contenedor = document.querySelector('.contenedor');
var botonazo = document.querySelector('.botonazo');

function clicked() {
    boton.classList.toggle('btn-on');
    contenedor.classList.toggle('contenedor-noche');
    botonazo.classList.toggle('botonazo-noche');
}