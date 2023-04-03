const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const usuario = form.elements.usuario.value;
    const correo = form.elements.correo.value;

    resultado.innerHTML = 'Usuario: ' + usuario + '<br> Correo: ' + correo;
});