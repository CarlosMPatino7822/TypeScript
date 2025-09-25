import { PeliculaEntity } from "../model/PeliculaEntity";
const pelicula1 = new PeliculaEntity("Inception", "2010-07-16", "PG-13", "Un ladrón que roba secretos corporativos a través de la tecnología de sueños compartidos.", "Inglés", ["Español", "Francés"], ["Español", "Francés", "Alemán"], "inception.jpg");
const pelicula2 = new PeliculaEntity("El Señor de los Anillos: La Comunidad del Anillo", "2001-12-19", "PG-13", "Un hobbit y sus amigos emprenden una misión para destruir un anillo poderoso.", "Inglés", ["Español", "Italiano"], ["Español", "Italiano", "Portugués"], "lotr1.jpg");
const pelicula3 = new PeliculaEntity("Coco", "2017-10-27", "PG", "Un niño mexicano se embarca en una aventura en la Tierra de los Muertos.", "Español", ["Inglés", "Francés"], ["Inglés", "Francés", "Alemán"], "coco.jpg");
const pelicula4 = new PeliculaEntity("Interstellar", "2014-11-07", "PG-13", "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio.", "Inglés", ["Español", "Alemán"], ["Español", "Alemán", "Francés"], "interstellar.jpg");
const pelicula5 = new PeliculaEntity("Avatar", "2009-12-18", "PG-13", "Un ex-marine se encuentra en medio de un conflicto en un planeta alienígena.", "Inglés", ["Español", "Francés"], ["Español", "Francés", "Italiano"], "avatar.jpg");
const pelicula6 = new PeliculaEntity("Titanic", "1997-12-19", "PG-13", "Una historia de amor a bordo del trágico Titanic.", "Inglés", ["Español", "Portugués"], ["Español", "Portugués", "Francés"], "titanic.jpg");
const pelicula7 = new PeliculaEntity("Toy Story", "1995-11-22", "G", "Los juguetes cobran vida cuando los humanos no están presentes.", "Inglés", ["Español", "Francés"], ["Español", "Francés", "Alemán"], "toystory.jpg");
const pelicula8 = new PeliculaEntity("Jurassic Park", "1993-06-11", "PG-13", "Un parque temático con dinosaurios clonados se convierte en un caos.", "Inglés", ["Español", "Italiano"], ["Español", "Italiano", "Francés"], "jurassicpark.jpg");
const pelicula9 = new PeliculaEntity("La La Land", "2016-12-09", "PG-13", "Una historia de amor entre una actriz y un músico en Los Ángeles.", "Inglés", ["Español", "Francés"], ["Español", "Francés", "Alemán"], "lalaland.jpg");
const pelicula10 = new PeliculaEntity("Spider-Man: Un Nuevo Universo", "2018-12-14", "PG", "Un adolescente se convierte en Spider-Man y conoce a otros héroes arácnidos de diferentes dimensiones.", "Inglés", ["Español", "Portugués"], ["Español", "Portugués", "Francés"], "spiderman-universo.jpg");
export const peliculas = [
    pelicula1,
    pelicula2,
    pelicula3,
    pelicula4,
    pelicula5,
    pelicula6,
    pelicula7,
    pelicula8,
    pelicula9,
    pelicula10
];
