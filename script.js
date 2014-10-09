//Here is the library class/object!
function Library(name) {
  	this.name = name;
  	//erase this.numShelves = 0 and add this.shelves = [];?
	this.numShelves = 0;
	this.books = [];
	//Aware of a number of shelves
	this.numShelves = function() {
		//console.log(this.shelves.length) instead?
		console.log(this.numShelves);
	};
	//Method to report all books it contains
	
	/*Would this be
	
	this.allBooks = function() {
		for(var i = 0; i < this.shelves.length; i++) {
			for(var j = 0l i < this.books.lengthl; j++) {
				console.log(this.books[j])
			}
		}
	} */
	
	}
	
	this.allBooks = function() {
		for(var i = 0; i < this.books.length; i++) {
			console.log(this.books[i]);
		}
	};
}

//Here is the shelf class/object!

//function Shelf(genre, library)
function Shelf(genre, q) {
	this.genre = genre;
	this.numBooks = 0;
	//Know what books it contains
	this.booksOnShelf = [];
	q.numShelves++;
}

//Here is the book class/object!

//function Book(title, library)
function Book(title, q) {
	this.title = title;
	//Enshelf method
	//change w to shelf? even though it's a variable in the Book object?
	this.enshelf = function(w) {
		var shelf = w.name;
		w.numBooks++;
		//change to push(this)
		w.booksOnShelf.push(this.name);
	};
	//Unshelf method
	//change w to shelf, q to library
	this.unshelf = function(w) {
		var shelf = w.name;
		var location = w.booksOnShelf.indexOf(this.name);
		w.numBooks--;
		w.booksOnShelf.splice(location, q);
	};
	q.books.push(title);
}


/* Used to test out the code!

var biblio = new Library("La Biblioteca");
var shelf1 = new Shelf("Fiction", biblio);
var shelf2 = new Shelf("Sci-Fi", biblio);
var book1 = new Book("Harry Potter", biblio); <---- adds book to the library
var book2 = new Book("The Sound and the Fury", biblio);
book1.enshelf(shelf1); <---- adds book to specific shelf
book2.enshelf(shelf2);
book2.unshelf(shelf2); <---- removes book from specific shelf
biblio.allBooks; <---- lists all books in library

*/
