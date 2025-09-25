import { mostrarPeliculas } from "./business/mostrarPeliculas";
import { buscarPeliculaByNombre } from "./business/FiltrarPelicula";
// Mostrar todas las películas al cargar la página
window.onload = () => {
    console.log("Página cargada, mostrando películas...");
    mostrarPeliculas();
    // Asignar evento al botón de filtrar
    const filtrarBtn = document.getElementById("btn-filtrar");
    if (filtrarBtn) {
        filtrarBtn.addEventListener("click", buscarPeliculaByNombre);
    }
};
    const mostrarTodasBtn = document.getElementById("btn-mostrar-todas");
    console.log("Buscando botón de mostrar todas las películas...");
    if (mostrarTodasBtn) {
        mostrarTodasBtn.addEventListener("click", mostrarPeliculas);
        console.log("Evento asignado al botón de mostrar todas las películas");
    }