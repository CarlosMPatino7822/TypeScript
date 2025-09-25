import { peliculas } from './GeneradorDePelicula';
import { buscarPeliculaByNombre } from './FiltrarPelicula';
import { PeliculaEntity } from '../model/PeliculaEntity';
// Ensure buscarPeliculaByNombre returns PeliculaEntity or null, not boolean
// If buscarPeliculaByNombre returns boolean, handle accordingly
let peliculaEncontrada = null;
const resultadoBusqueda = buscarPeliculaByNombre();
if (typeof resultadoBusqueda === "object" && resultadoBusqueda !== null) {
    peliculaEncontrada = resultadoBusqueda;
}
let contenedor = document.getElementById("contenedor-pelicula");
contenedor.innerHTML = "";
let movies = peliculas;
let movie;
if (peliculaEncontrada == null) {
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
else {
    let movie = peliculaEncontrada;
    contenedor.innerHTML = "";
    contenedor.innerHTML +=
        '<div class="pelicula">' +
            '<img src="' + movie.getImagen() + '" alt="' + movie.getNombre() + '">' +
            '<div>' +
            '<h2>' + movie.getNombre() + '</h2>' +
            '<p><strong>Fecha de publicación:</strong> ' + movie.getFechaDePublicacion() + '</p>' +
            '<p><strong>Edad mínima:</strong> ' + movie.getRestriccionDeEdad() + '+</p>' +
            '<p><strong>Descripción:</strong> ' + movie.getDescripcion() + '</p>' +
            '<p><strong>Idioma original:</strong> ' + movie.getIdiomaOriginal() + '</p>' +
            '<p><strong>Doblajes:</strong> ' + movie.getDoblajes().join(", ") + '</p>' +
            '<p><strong>Subtítulos:</strong> ' + movie.getSubtitulos().join(", ") + '</p>' +
            '</div>' +
            '</div>';
    console.log(movie.getNombre());
    console.log(movie.getFechaDePublicacion());
    console.log(peliculaEncontrada.getFechaDePublicacion());
}
