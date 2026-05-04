function incrementPage() {
    currentPage++;
    fetchBooks();
}

function decrementPage() {
    if (currentPage > 1) {
        currentPage--;
        fetchBooks();
    }
}
let state = {
    currentSearch: "the lord of the rings", // Default value from HTML
    currentPage: 1,                        // API pages start at 1
    totalPages: 1,
    isLoading: false
};
