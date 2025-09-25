let movie1 : {
    nombre: String,
    fechaDePublicacion: String,
    restriccionDeEdad: String,
    descripcion: String,
    idiomaOriginal: String,
    doblajes: String[],
    subtitulos: String[],
    imagen: String,
} = {
    nombre: "Venom 3",
    fechaDePublicacion: "12/03/2025",
    restriccionDeEdad:  "12",
    descripcion: "Eddie Brock y Venom enfrentan una nueva amenaza que pondrá a prueba su vínculo.",
    idiomaOriginal: "Inglés",
    doblajes: ["Español Latino", "Francés", "Portugués"],
    subtitulos: ["Español", "Inglés", "Francés"],
    imagen: "https://upload.wikimedia.org/wikipedia/en/0/05/Venom_poster.jpg"
};
let movie2 : {
    nombre: String,
    fechaDePublicacion: String,
    restriccionDeEdad: String,
    descripcion: String,
    idiomaOriginal: String,
    doblajes: String[],
    subtitulos: String[],
    imagen: String,
} ={nombre: "Interstellar",
    fechaDePublicacion: "07/11/2014",
    restriccionDeEdad: "13",
    descripcion: "Un grupo de exploradores viaja a través de un agujero de gusano para salvar a la humanidad.",
    idiomaOriginal: "Inglés",
    doblajes: ["Español", "Alemán"],
    subtitulos: ["Español", "Francés", "Italiano"],
    imagen: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg" }
let movie3 : {
    nombre: String,
    fechaDePublicacion: String,
    restriccionDeEdad: String,
    descripcion: String,
    idiomaOriginal: String,
    doblajes: String[],
    subtitulos: String[],
    imagen: String,
}={ nombre: "Titanic",
    fechaDePublicacion: "19/12/1997",
    restriccionDeEdad: "12",
    descripcion: "Una historia de amor entre Jack y Rose a bordo del trágico Titanic.",
    idiomaOriginal: "Inglés",
    doblajes: ["Español", "Francés", "Portugués"],
    subtitulos: ["Español", "Inglés", "Alemán"],
    imagen: "https://upload.wikimedia.org/wikipedia/en/2/2e/Titanic_poster.jpg" }
let movie4 : {
    nombre: String,
    fechaDePublicacion: String,
    restriccionDeEdad: String,
    descripcion: String,
    idiomaOriginal: String,
    doblajes: String[],
    subtitulos: String[],
    imagen: String,
}={ nombre: "The Dark Knight",
    fechaDePublicacion: "18/07/2008",
    restriccionDeEdad: "13",
    descripcion: "Batman enfrenta al Joker, un criminal caótico que busca sumir a Gotham en la anarquía.",
    idiomaOriginal: "Inglés",
    doblajes: ["Español Latino", "Francés"],
    subtitulos: ["Español", "Inglés", "Chino"],
    imagen: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg" }

export function generadorDePelicula() {
        return [movie1, movie2, movie3, movie4];
    }
