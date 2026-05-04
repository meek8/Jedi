/**
 * Turns the "docs" array into HTML cards
 */
function renderBooks(docs) {
    const container = document.querySelector('#books_div');
    const pageSpan = document.querySelector('#pages_span');
    
    container.innerHTML = '';
    pageSpan.textContent = `${state.currentPage} / ${state.totalPages}`;

    if (docs.length === 0) {
        container.innerHTML = "<p>No books found.</p>";
        return;
    }

    docs.forEach(book => {
        const card = document.createElement('div');
        card.className = 'BookCard';

        const coverUrl = book.cover_i 
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
            : 'https://via.placeholder.com/100x150?text=No+Cover';

        card.innerHTML = `
            <img src="${coverUrl}" alt="Cover">
            <div>
                <h3>${book.title}</h3>
                <p>Author: ${book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
                <p>Year: ${book.first_publish_year || 'N/A'}</p>
                <p>Language: ${book.language ? book.language[0] : 'N/A'}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderLoading() {
    const booksDiv = document.querySelector('#books_div');
    booksDiv.innerHTML = '<div class="loader"></div>'; 
}
    document.querySelector('#books_div').innerHTML = '<div class="loader"></div>';
}
