import { peliculas } from './GeneradorDePelicula';
import { PeliculaEntity } from '../model/PeliculaEntity';

export function mostrarPeliculas(): void {
  const contenedor = document.getElementById("contenedor") as HTMLElement | null;
  if (!contenedor) return;
  
  contenedor.innerHTML = "";
  
  // Mostrar todas las películas
  for (let index = 0; index < peliculas.length; index++) {
    const currentMovie = peliculas[index];
    if (currentMovie != null) {
      contenedor.innerHTML += `
        <div class="pelicula">
          <img src="${currentMovie.getImagen()}" alt="${currentMovie.getNombre()}">
          <div>
            <h2>${currentMovie.getNombre()}</h2>
            <p><strong>Fecha de publicación:</strong> ${currentMovie.getFechaDePublicacion()}</p>
            <p><strong>Edad mínima:</strong> ${currentMovie.getRestriccionDeEdad()}+</p>
            <p><strong>Descripción:</strong> ${currentMovie.getDescripcion()}</p>
            <p><strong>Idioma original:</strong> ${currentMovie.getIdiomaOriginal()}</p>
            <p><strong>Doblajes:</strong> ${currentMovie.getDoblajes().join(", ")}</p>
            <p><strong>Subtítulos:</strong> ${currentMovie.getSubtitulos().join(", ")}</p>
          </div>
        </div>
      `;
    }
  }
}


