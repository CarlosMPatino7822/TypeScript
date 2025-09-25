import { peliculas } from './GeneradorDePelicula';
import { PeliculaEntity } from '../model/PeliculaEntity';


let contenedor = document.getElementById("contenedor-pelicula") as HTMLElement;
contenedor.innerHTML = "";
let movies = peliculas;
let movie: PeliculaEntity;
export function mostrarPeliculas(): void {
  // Mostrar todas las películas
  for (let index = 0; index < movies.length; index++) {
    const currentMovie = movies[index];
    if (currentMovie != null) {
      contenedor.innerHTML +=
        '<div class="pelicula">' +
        '<img src="' + currentMovie.getImagen() + '" alt="' + currentMovie.getNombre() + '">' +
        '<div>' +
        '<h2>' + currentMovie.getNombre() + '</h2>' +
        '<p><strong>Fecha de publicación:</strong> ' + currentMovie.getFechaDePublicacion() + '</p>' +
        '<p><strong>Edad mínima:</strong> ' + currentMovie.getRestriccionDeEdad() + '+</p>' +
        '<p><strong>Descripción:</strong> ' + currentMovie.getDescripcion() + '</p>' +
        '<p><strong>Idioma original:</strong> ' + currentMovie.getIdiomaOriginal() + '</p>' +
        '<p><strong>Doblajes:</strong> ' + currentMovie.getDoblajes().join(", ") + '</p>' +
        '<p><strong>Subtítulos:</strong> ' + currentMovie.getSubtitulos().join(", ") + '</p>' +
        '</div>' +
        '</div>';
    }
  }
}


