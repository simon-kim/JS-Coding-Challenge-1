//Here is the library class/object!
function Library(name) {
  this.name = name;
	this.numShelves = 0;
	this.books = [];
	//Aware of a number of shelves
	this.numShelves = function() {
		console.log(this.numShelves);
	};
	//Method to report all books it contains
	this.allBooks = function() {
		for(var i = 0; i < this.books.length; i++) {
			console.log(this.books[i]);
		}
	};
}

//Here is the shelf class/object!
function Shelf(genre, q) {
	this.genre = genre;
	this.numBooks = 0;
	//Know what books it contains
	this.booksOnShelf = [];
	q.numShelves++;
}

//Here is the book class/object!
function Book(title, q) {
	this.title = title;
	//Enshelf method
	this.enshelf = function(w) {
		var shelf = w.name;
		w.numBooks++;
		w.booksOnShelf.push(this.name);
	};
	//Unshelf method
	this.unshelf = function(w) {
		var shelf = w.name;
		var location = w.booksOnShelf.indexOf(this.name);
		w.numBooks--;
		w.booksOnShelf.spice(location, q);
	};
	q.books.push(title);
}
