
// create class Book
    // - title
    // - isbn
    // - author
class Book{
    constructor(title, isbn, author){
        this.title = title;
        this.isbn = isbn;
        this.author = author;
    }
  
    static countUsers(){
      console.log('There are 50 users');
    }
  
    register(){
      console.log(this.title+' is now registered');
    }
  }

// create 5 instances  
  let book1 = new Book('lord of the ring', '24567', 'kim');
  let book2 = new Book('2 tigers', '24588', 'Sherin');
  let book3 = new Book('3 cats', '24288', 'Peter');
  let book4 = new Book('4 meows', '12188', 'Hello Kitty');
  let book5 = new Book('5 parrots', '22222', 'Peter Pan');

// add them to an array
newArr = []
newArr.push(book1)
newArr.push(book2)
newArr.push(book3)
newArr.push(book4)
newArr.push(book5)

console.log(newArr)
// loop through array
// print each book title with isbn
newArr.forEach(function(book){
  console.log(book.title + book.isbn)
});

// Beast Mode
// experment by doing the same thing but with factory & constructor functions

// Factory function:

function factoryBook(title, isbn, author) {
  return { 
    title: title, 
    isbn: isbn, 
    author: author ,
    countUsers: function() { console.log("There are 50 users"); },
    register: function() { console.log(this.title + ' is now registered'); }
  };
}

let book1 = factoryBook("Harry Potter", "12345", "JK Rowling");
book1.register();
book1.countUsers();

// Prototype
function Book(title, isbn, author) {
  this.title = title;
  this.isbn = isbn;
  this.author = author;
}

Book.prototype.countUsers = function() {
   console.log("There are 50 users");
}

Book.prototype.register = function() {
   console.log(this.title+' is now registered');
}

let book1 = new Book('harry potter', '12345', 'jk rowling');
book1.countUsers();
book1.register();
