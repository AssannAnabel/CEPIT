"use strict";
/* Armar una base de datos de libros
Hacer el planteo de las clases necesarias
Implementar la clase Libro
Implementar la clase GestorLibros → debe soportar insertar/consultar/modificar/eliminar libros (la entrada de información por teclado)
Luego incorporar en donde se crea necesario un mecanismo para leer libros desde un archivo de texto
Subir las cosas a GitHub y avisar por Slack */
exports.__esModule = true;
exports.GestorLibros = exports.Libro = void 0;
/* Definimos nuestra clase Libro */
var Libro = /** @class */ (function () {
    function Libro(nombre, genero, cantPaginas, autor) {
        this.nombre = nombre;
        this.genero = genero;
        this.cantPaginas = cantPaginas;
        this.autor = autor;
    }
    return Libro;
}());
exports.Libro = Libro;
/* Implementar la clase GestorLibros → debe soportar insertar/consultar/modificar/eliminar libros */
var GestorLibros = /** @class */ (function () {
    function GestorLibros() {
    }
    GestorLibros.prototype.todo = function (array) {
        console.log('Libros: ', array);
    };
    GestorLibros.prototype.insertar = function () {
        var fs = require("fs");
        var data = fs.readFileSync("./books.json", "utf8");
        var books = JSON.parse(data);
        for (var i = 0; i < books.length; i++) {
            biblioteca.push(books[i]);
        }
    };
    GestorLibros.prototype.consultar = function (nombre, array) {
        var libroEncontrado = array.find(function (libro) { return libro.nombre === nombre; });
        if (libroEncontrado) {
            console.log(nombre, ' Existe en bibioteca', libroEncontrado);
            return libroEncontrado;
        }
        else {
            console.log(nombre, ' No existe en biblioteca');
        }
    };
    GestorLibros.prototype.modificar = function (nombre, array, dato) {
        var libroModificar = this.consultar(nombre, array);
        if (libroModificar) {
            libroModificar.nombre = dato;
            console.log('El libro', nombre, ' Ha sido modificado y ahora se llama ', dato);
        }
        else {
            console.log('El libro no se ha podido modificar');
        }
    };
    GestorLibros.prototype.eliminar = function (nombre, array) {
        var libroEncontrado = array.findIndex(function (libro) { return libro.nombre == nombre; });
        if (libroEncontrado >= 0) {
            array.splice(libroEncontrado, 1);
            console.log('Libro eliminado', nombre);
            console.log(array);
            return array;
        }
        else {
            console.log('Libro ', nombre, 'no ha sido eliminado');
        }
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
/*
Crear libros
Crear una biblioteca de libros
crear gestor de libros
ejecutar la funcion todo
ejecutar la funcion insertar}
ejecutar la funcion consultar
ejecutar la funcion modificar
ejecutar la funcion eliminar */
/* Nuestros libros */
var harryPotter = new Libro('Harry Potter', 'Fantasia', 200, 'J.k. Rowling');
var martinFierro = new Libro('Martin Fierro', 'Tradicionalista', 200, 'Jose Hernandez');
var señorAnillos = new Libro('Señor de los anillos', 'Fantasia', 500, 'J. RR Tolkien');
/* Poblar nuestra biblioteca con libros */
var biblioteca = [harryPotter, martinFierro, señorAnillos];
/* Crear nuevo gestor de libros */
var gestor = new GestorLibros;
var carrie = new Libro('Carrie', 'Terror', 450, 'Stephen King');
// gestor.insertar(carrie, biblioteca)
// gestor.todo(biblioteca)
// gestor.consultar('Señor de los anillos', biblioteca)
// gestor.modificar('Harry Potter', biblioteca, 'Harry Potter y el prisionero de askaban')
gestor.eliminar('Harry Potter', biblioteca);
