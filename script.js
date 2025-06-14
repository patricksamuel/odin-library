const myLibrary = [];

function Book(bookId,title,author,pages,readstatus) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.bookId = bookId;
    this.title = title;
    this.author= author;
    this.pages = pages;
    this.readstatus = readstatus;
}

Book.prototype.info = function() {
    if (this.readstatus) {
        console.log(this.title+" by "+this.author+", "+this.pages+" pages, already read.")
    }
    else {
        console.log(this.title+" by "+this.author+", "+this.pages+" pages, not read yet.")
    }
}

function addBookToLibrary(title ,author,pages,readstatus) {
    const bookId = crypto.randomUUID();
    const newBook = new Book(bookId, title ,author,pages,readstatus);
    myLibrary.push(newBook);
}

const buttonAddBook = document.querySelector(".addBookButton");

buttonAddBook.addEventListener("click", (e) => {
    e.preventDefault()
    title = document.querySelector("#title");
    author = document.querySelector("#author");
    pages = document.querySelector("#pages");

    readstatus = document.querySelector("input[name='alreadyRead']:checked").value === "true";

    addBookToLibrary(title.value ,author.value,pages.value,readstatus);
    updateDisplay();
})



addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("Brave New World", "Aldous Huxley", 268, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);

function updateDisplay() {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
    for (const book of myLibrary) {
        const card = document.createElement("table");

        for (const key in book) {
            if (typeof book[key] === "function") continue;
            if (key === "bookId") continue;

            const row = document.createElement("tr");
            const header = document.createElement("td")
            header.textContent = key
            rowValue = document.createElement("td");
            rowValue.textContent = book[key];
            row.appendChild(header);
            row.appendChild(rowValue);
            card.appendChild(row);
            

        }
        cardContainer.appendChild(card);
        //  const row1= document.createElement("tr");
        //  const header1 = document.createElement("td");
        //  header1.textContent = "Title"
        //  const td1 = document.createElement("td");
        //  td1.textContent = book.title;

        //  row1.appendChild(header1);
        //  row1.appendChild(td1);
        //  card.appendChild(row1);
        //  cardContainer.appendChild(card);

    }

}


updateDisplay();
