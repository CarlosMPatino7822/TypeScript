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
};
