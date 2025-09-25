import { mostrarPeliculas } from "./business/mostrarPeliculas";
import { buscarPeliculaByNombre } from "./business/FiltrarPelicula";
// Mostrar todas las películas al cargar la página
window.onload = () => {
    mostrarPeliculas();
    // Asignar evento al botón de filtrar
    const filtrarBtn = document.getElementById("btn-filtrar");
    if (filtrarBtn) {
        filtrarBtn.addEventListener("click", buscarPeliculaByNombre);
    }
    // Asignar evento al botón de mostrar todas
    const mostrarTodasBtn = document.getElementById("btn-mostrar-todas");
    if (mostrarTodasBtn) {
        mostrarTodasBtn.addEventListener("click", mostrarPeliculas);
    }
    // Permitir filtrar con Enter
    const inputFiltrar = document.getElementById("filtrar");
    if (inputFiltrar) {
        inputFiltrar.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                buscarPeliculaByNombre();
            }
        });
    }
};
