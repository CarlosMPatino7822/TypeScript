import { peliculas } from "./GeneradorDePelicula";

export function buscarPeliculaByNombre(): void {
    const contenedor = document.getElementById("contenedor") as HTMLElement | null;
    if (!contenedor) return;

    contenedor.innerHTML = "";

    const input = document.getElementById("filtrar") as HTMLInputElement | null;
    const nombrePeli: string = input?.value ?? "";

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        if (pelicula && pelicula.nombre === nombrePeli) {
            const movie = pelicula;
            contenedor.innerHTML += `
                <div class="pelicula">
                    <img src="${movie.imagen}" alt="${movie.nombre}">
                    <div>
                        <h2>${movie.nombre}</h2>
                        <p><strong>Fecha de publicación:</strong> ${movie.fechaDePublicacion}</p>
                        <p><strong>Edad mínima:</strong> ${movie.restriccionDeEdad}+</p>
                        <p><strong>Descripción:</strong> ${movie.descripcion}</p>
                        <p><strong>Idioma original:</strong> ${movie.idiomaOriginal}</p>
                        <p><strong>Doblajes:</strong> ${movie.doblajes.join(", ")}</p>
                        <p><strong>Subtítulos:</strong> ${movie.subtitulos.join(", ")}</p>
                    </div>
                </div>
            `;
        }
        else {
            contenedor.innerHTML = "<p>Papito no existe</p>";
        }
    }
}
