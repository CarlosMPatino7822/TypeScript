

let usuario = {
    cedula: 1107843534,
    nombre: "Miguel",
    apellido: "Lievano",
    edad: 19,
    direccion: "Calle#46 43-56",
    peliculaFavorita: "Maicraft",
};
let usuario1 = {
    cedula: "1001234567",
    nombre: "Carlos",
    apellido: "López",
    edad: 25,
    direccion: "Calle 10 #15-23",
    peliculaFavorita: "Inception"
};

let usuario2 = {
    cedula: "1019876543",
    nombre: "Ana",
    apellido: "Martínez",
    edad: 30,
    direccion: "Carrera 45 #20-12",
    peliculaFavorita: "Titanic"
};

let usuario3 = {
    cedula: "1023456789",
    nombre: "Javier",
    apellido: "Gómez",
    edad: 28,
    direccion: "Av. Siempre Viva 742",
    peliculaFavorita: "The Dark Knight"
};

let usuario4 = {
    cedula: "1035678912",
    nombre: "Laura",
    apellido: "Pérez",
    edad: 22,
    direccion: "Calle 50 #8-40",
    peliculaFavorita: "Interstellar"
};
let movie1 = {
    nombre: "Venom 3",
    fechaDePublicacion: "12/03/2025",
    restriccionDeEdad: "12",
    descripcion: "Eddie Brock y Venom enfrentan una nueva amenaza que pondrá a prueba su vínculo.",
    idiomaOriginal: "Inglés",
    doblajes: ["Español Latino", "Francés", "Portugués"],
    subtitulos: ["Español", "Inglés", "Francés"],
    imagen: "https://upload.wikimedia.org/wikipedia/en/0/05/Venom_poster.jpg"
};

let movie2 = {
    nombre: "Interstellar",
    fechaDePublicacion: "07/11/2014",
    restriccionDeEdad: "13",
    descripcion: "Un grupo de exploradores viaja a través de un agujero de gusano para salvar a la humanidad.",
    idiomaOriginal: "Inglés",
    doblajes: ["Español", "Alemán"],
    subtitulos: ["Español", "Francés", "Italiano"],
    imagen: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
};

let movie3 = {
    nombre: "Titanic",
    fechaDePublicacion: "19/12/1997",
    restriccionDeEdad: "12",
    descripcion: "Una historia de amor entre Jack y Rose a bordo del trágico Titanic.",
    idiomaOriginal: "Inglés",
    doblajes: ["Español", "Francés", "Portugués"],
    subtitulos: ["Español", "Inglés", "Alemán"],
    imagen: "https://upload.wikimedia.org/wikipedia/en/2/2e/Titanic_poster.jpg"
};

let movie4 = {
    nombre: "The Dark Knight",
    fechaDePublicacion: "18/07/2008",
    restriccionDeEdad: "13",
    descripcion: "Batman enfrenta al Joker, un criminal caótico que busca sumir a Gotham en la anarquía.",
    idiomaOriginal: "Inglés",
    doblajes: ["Español Latino", "Francés"],
    subtitulos: ["Español", "Inglés", "Chino"],
    imagen: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg"
};

const movies = [movie1, movie2, movie3, movie4];
const contenedor = document.getElementById("contenedor");

function buscarPeliculaByNombre() {
    let nombrePeli = document.getElementById("filtrar").value;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].nombre === nombrePeli) {
            console.log("Pelicula encontrada " + movies[i].nombre);
            return movies[i];
        }
    }
    console.log("Pelicula no encontrada");
    return null;
}

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



function buscarPeliculaByNombre() {
    let nombrePeli = document.getElementById("filtrar").value;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].nombre === nombrePeli) {
            console.log("Pelicula encontrada " + movies[i].nombre);
            return movies[i];
        }
    }
    console.log("Pelicula no encontrada");
    return null;
}