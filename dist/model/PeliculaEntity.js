export class PeliculaEntity {
    constructor(nombre, fechaDePublicacion, restriccionDeEdad, descripcion, idiomaOriginal, doblajes, subtitulos, imagen) {
        this.nombre = nombre;
        this.fechaDePublicacion = fechaDePublicacion;
        this.restriccionDeEdad = restriccionDeEdad;
        this.descripcion = descripcion;
        this.idiomaOriginal = idiomaOriginal;
        this.doblajes = doblajes;
        this.subtitulos = subtitulos;
        this.imagen = imagen;
    }
    // Getters
    getNombre() {
        return this.nombre;
    }
    getFechaDePublicacion() {
        return this.fechaDePublicacion;
    }
    getRestriccionDeEdad() {
        return this.restriccionDeEdad;
    }
    getDescripcion() {
        return this.descripcion;
    }
    getIdiomaOriginal() {
        return this.idiomaOriginal;
    }
    getDoblajes() {
        return this.doblajes;
    }
    getSubtitulos() {
        return this.subtitulos;
    }
    getImagen() {
        return this.imagen;
    }
    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setFechaDePublicacion(fecha) {
        this.fechaDePublicacion = fecha;
    }
    setRestriccionDeEdad(restriccion) {
        this.restriccionDeEdad = restriccion;
    }
    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    setIdiomaOriginal(idioma) {
        this.idiomaOriginal = idioma;
    }
    setDoblajes(doblajes) {
        this.doblajes = doblajes;
    }
    setSubtitulos(subtitulos) {
        this.subtitulos = subtitulos;
    }
    setImagen(imagen) {
        this.imagen = imagen;
    }
}
