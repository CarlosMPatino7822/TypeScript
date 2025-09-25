
import { peliculas } from "./GeneradorDePelicula";

export function buscarPeliculaByNombre(): void {
    const contenedor = document.getElementById("contenedor") as HTMLElement | null;
    if (!contenedor) return;

    contenedor.innerHTML = "";

    const input = document.getElementById("filtrar") as HTMLInputElement | null;
    const nombrePeli: string = input?.value ?? "";

    // Si no hay texto, no buscar nada
    if (nombrePeli.trim() === "") {
        contenedor.innerHTML = "<p>Por favor, ingresa el nombre de una película</p>";
        return;
    }

    let encontrada = false;

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        // Hacer búsqueda insensible a mayúsculas/minúsculas
        if (pelicula && pelicula.getNombre().toLowerCase().includes(nombrePeli.toLowerCase())) {
            encontrada = true;
            contenedor.innerHTML += `
                <div class="pelicula">
                    <img src="${pelicula.getImagen()}" alt="${pelicula.getNombre()}">
                    <div>
                        <h2>${pelicula.getNombre()}</h2>
                        <p><strong>Fecha de publicación:</strong> ${pelicula.getFechaDePublicacion()}</p>
                        <p><strong>Edad mínima:</strong> ${pelicula.getRestriccionDeEdad()}+</p>
                        <p><strong>Descripción:</strong> ${pelicula.getDescripcion()}</p>
                        <p><strong>Idioma original:</strong> ${pelicula.getIdiomaOriginal()}</p>
                        <p><strong>Doblajes:</strong> ${pelicula.getDoblajes().join(", ")}</p>
                        <p><strong>Subtítulos:</strong> ${pelicula.getSubtitulos().join(", ")}</p>
                    </div>
                </div>
            `;
        }
    }

    if (!encontrada) {
        contenedor.innerHTML = "<p>No se encontró ninguna película con ese nombre</p>";
    }
}