import { peliculas } from './GeneradorDePelicula';
import { buscarPeliculaByNombre } from './buscarPeliculaByNombre';
import {PeliculaEntity} from './model/PeliculaEntity';

let peliculaEncontrada = buscarPeliculaByNombre();

let contenedor = document.getElementById("contenedor-pelicula") as HTMLElement;
contenedor.innerHTML = ""; 
 let movies = generadorDePelicula();
if (peliculaEncontrada == null) {
  // Mostrar todas las películas
  for (let index = 0; index < movies.length; index++) {
    const movie = new PeliculaEntity(movies[index]);
    contenedor.innerHTML +=
      '<div class="pelicula">' +
        '<img src="' + movie.imagen + '" alt="' + movie.nombre + '">' +
        '<div>' +
          '<h2>' + movie.nombre + '</h2>' +
          '<p><strong>Fecha de publicación:</strong> ' + movie.getFechaDePublicacion() + '</p>' +
          '<p><strong>Edad mínima:</strong> ' + movie.getRestriccionDeEdad() + '+</p>' +
          '<p><strong>Descripción:</strong> ' + movie.getDescripcion() + '</p>' +
          '<p><strong>Idioma original:</strong> ' + movie.getIdiomaOriginal() + '</p>' +
          '<p><strong>Doblajes:</strong> ' + movie.getDoblajes().join(", ") + '</p>' +
          '<p><strong>Subtítulos:</strong> ' + movie.getSubtitulos().join(", ") + '</p>' +
        '</div>' +
      '</div>';
  }
} else {
  // Mostrar solo la película encontrada
  let movie = peliculaEncontrada;
  contenedor.innerHTML = ""; 
  contenedor.innerHTML +=
    '<div class="pelicula">' +
      '<img src="' + movie.imagen + '" alt="' + movie.nombre + '">' +
      '<div>' +
        '<h2>' + movie.nombre + '</h2>' +
        '<p><strong>Fecha de publicación:</strong> ' + movie.getFechaDePublicacion() + '</p>' +
        '<p><strong>Edad mínima:</strong> ' + movie.getRestriccionDeEdad() + '+</p>' +
        '<p><strong>Descripción:</strong> ' + movie.getDescripcion() + '</p>' +
        '<p><strong>Idioma original:</strong> ' + movie.getIdiomaOriginal() + '</p>' +
        '<p><strong>Doblajes:</strong> ' + movie.getDoblajes().join(", ") + '</p>' +
        '<p><strong>Subtítulos:</strong> ' + movie.getSubtitulos().join(", ") + '</p>' +
      '</div>' +
    '</div>';
    console.log(peliculaEncontrada.getNombre());
    console.log(peliculaEncontrada.getFechaDePublicacion());
}