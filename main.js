// Add your JavaScript code to this file!
// main.js

let currentPage = 1;
let currentSearch = "";

async function onSearch() {
    const input = document.querySelector('#search_input');
    state.currentSearch = input.value;
    state.currentPage = 1; 
    const books = await fetchBooks();
    renderBooks(books);
}

async function incrementPage() {
    state.currentPage++;
    const books = await fetchBooks();
    renderBooks(books);
}

async function decrementPage() {
    if (state.currentPage > 1) {
        state.currentPage--;
        const books = await fetchBooks();
        renderBooks(books);
    }
}

window.addEventListener('DOMContentLoaded', onSearch);
