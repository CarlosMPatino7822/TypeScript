import { generadorDePelicula } from './peliculas';
import { buscarPeliculaByNombre } from './buscarPeliculaByNombre';

let peliculaEncontrada = buscarPeliculaByNombre();
contenedor.innerHTML = ""; 

if (peliculaEncontrada == null) {
  // Mostrar todas las películas
  for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];
    contenedor.innerHTML +=
      '<div class="pelicula">' +
        '<img src="' + movie.imagen + '" alt="' + movie.nombre + '">' +
        '<div>' +
          '<h2>' + movie.nombre + '</h2>' +
          '<p><strong>Fecha de publicación:</strong> ' + movie.fechaDePublicacion + '</p>' +
          '<p><strong>Edad mínima:</strong> ' + movie.restriccionDeEdad + '+</p>' +
          '<p><strong>Descripción:</strong> ' + movie.descripcion + '</p>' +
          '<p><strong>Idioma original:</strong> ' + movie.idiomaOriginal + '</p>' +
          '<p><strong>Doblajes:</strong> ' + movie.doblajes.join(", ") + '</p>' +
          '<p><strong>Subtítulos:</strong> ' + movie.subtitulos.join(", ") + '</p>' +
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
        '<p><strong>Fecha de publicación:</strong> ' + movie.fechaDePublicacion + '</p>' +
        '<p><strong>Edad mínima:</strong> ' + movie.restriccionDeEdad + '+</p>' +
        '<p><strong>Descripción:</strong> ' + movie.descripcion + '</p>' +
        '<p><strong>Idioma original:</strong> ' + movie.idiomaOriginal + '</p>' +
        '<p><strong>Doblajes:</strong> ' + movie.doblajes.join(", ") + '</p>' +
        '<p><strong>Subtítulos:</strong> ' + movie.subtitulos.join(", ") + '</p>' +
      '</div>' +
    '</div>';
    console.log(peliculaEncontrada.nombre);
    console.log(peliculaEncontrada.fechaDePublicacion);
}