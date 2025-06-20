
// Busqueda de libros
const inputBusqueda = document.querySelector(".busqueda");
const botonBuscar = document.querySelector(".botonBusqueda");

const libros= document.querySelectorAll(".libro");


botonBuscar.addEventListener("click", () => {
    const texto = inputBusqueda.value.toLowerCase();

    libros.forEach((libro, i) => {
        const nombre = nombres[i].textContent.toLowerCase();
        const autor = autores[i].textContent.toLowerCase();
        const genero = generos[i].textContent.toLowerCase();

        if (nombre.includes(texto) || autor.includes(texto) || genero.includes(texto)) {
            libro.style.display = "block";
        } else {
            libro.style.display = "none";
        }
    });
});

