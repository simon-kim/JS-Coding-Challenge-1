//Here is the library class/object!
function Library(name) {
    this.name = name;
    this.shelves = [];
    this.numShelves = function() {
      console.log(this.shelves.length);
    };
    this.reportBooks = function() {
       for(var i = 0; i < this.shelves.length; i++) {
          for(var j = 0; j < this.shelves[i].books.length ; j++) {
             console.log(this.shelves[i].books[j].title);
          }
       }
    };
}

//Here is the shelf class/object!g
function Shelf(genre) {
    this.genre = genre;
    this.books = [];
    this.numBooks = function() {
       console.log(this.books.length);
    };
    this.addToLibrary = function(library) {
      library.shelves.push(this);    
    };
}

//Here is the book class/object!
function Book(title) {
    this.title = title;
    //Enshelf method
    this.enshelf = function(shelf) {
      shelf.books.push(this);
    };
    //Unshelf method
    this.unshelf = function(shelf) {
      var location = shelf.indexOf(this);
      shelf.books.splice(location, 1);
    };
}


/* Used to test out the code!

var biblio = new Library("La Biblioteca");
var fiction = new Shelf("Fiction");
var scifi = new Shelf("Sci-Fi");
var hp = new Book("Harry Potter"); <---- adds book to the library
var sound = new Book("The Sound and the Fury");
hp.enshelf(fiction); <---- adds book to specific shelf
sound.enshelf(scifi);
sound.unshelf(scifi); <---- removes book from specific shelf
biblio.reportBooks; <---- lists all books in library

*/
