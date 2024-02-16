let books = document.querySelector('.books');

let h1 = document.querySelector('#h1');
h1.innerText += "'s Jusuf";

//Button za brisanje
let del_button = document.querySelectorAll('.del-btn')

del_button.forEach(function(btn){
    btn.addEventListener('click', function() {
        let book1 = btn.parentElement.parentElement;
        book1.parentNode.removeChild(book1);
    })
})

//Dodavanje knjiga

let forma = document.querySelector('#drugi');

forma.addEventListener('submit', (e)=> {
    e.preventDefault();
    const vrijednost = forma.querySelector('input[type="text"]').value;

        //Dodavanje elemenata
        const book = document.createElement('div');
        const first = document.createElement('div');
        const second = document.createElement('div');
        const line = document.createElement('div');
        const p = document.createElement('p');
        const button = document.createElement('button');

        //Appendati elemente
        book.appendChild(first);
        book.appendChild(second);
        first.appendChild(line);
        first.appendChild(p);
        second.appendChild(button);
        books.appendChild(book);

        //Dodavanje teksta
        p.textContent = vrijednost;
        button.textContent = 'Delete';

        //Dodavanje klasa
        book.classList.add('book');
        first.classList.add('first');
        second.classList.add('second');
        line.classList.add('line');
        p.classList.add('naziv');
        button.classList.add('del-btn');

        button.addEventListener('click', function() {
            let knjiga = button.parentElement.parentElement;
            knjiga.parentNode.removeChild(knjiga);
        })
})

//Skrivanje knjiga
let kockica = document.querySelector('#hide');
kockica.addEventListener('change', function(e){
    if(kockica.checked){
        knjige.style.display = 'none';
    } else {
        knjige.style.display = 'initial';
    }
})

//Trazenje knjiga
const searchBox = document.forms['prvi'].querySelector('input');

searchBox.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = books.getElementsByClassName('book');
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
})

