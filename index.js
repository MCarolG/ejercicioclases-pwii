console.log("hola mundo")

function HolaMundo(Pelicula){
    console.log("Informacion de la:")
}

class pelicula{
    Nombre
    Director
    ActorPrincipal
    Genero
    
    constructor(nombre1, nombre2, nombre3, genero){
        this.Nombre = nombre1
        this.Director = nombre2
        this.ActorPrincipal = nombre3
        this.Genero = genero
    }
}

const objPelicula = {
    nombre1: "Spider Man",
    nombre2: "Sam Raimi",
    nombre3: "Toby Maguire",
    editorial: "Accion & Ciencia ficcion",
}

const Pelicula = new pelicula("Spider Man", "Sam Raimi", "Toby Maguire", "Accion & Ciencia ficcion")

HolaMundo(objPelicula)
console.log(Pelicula)