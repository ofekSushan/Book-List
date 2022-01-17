class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');   
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <img id="imageid" src="img/book.png" alt="" style="width:50px;height:50px;">
      <td><a href="#" class="delete">X<a></td>
    `;
  
    list.appendChild(row);
  }

  deleteBook(target) {
    if(target.className === 'delete') {
      if(confirm('are you sure')==true){
        target.parentElement.parentElement.remove();
      }
      
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

document.getElementById('book-form').addEventListener('submit', function(e){
  e.preventDefault();
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  const book = new Book(title, author, isbn);
  const ui = new UI();

  if(title === '' || author === '' || isbn === '') {
    alert('please fill everything')


  } else {
    ui.addBookToList(book);

  
    ui.clearFields();
  }
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  e.preventDefault();
  const ui = new UI();
  ui.deleteBook(e.target);



});

