async function fetchBooks() {
    state.isLoading = true;
    renderLoading();

    const baseUrl = "https://openlibrary.org/search.json";
    const query = encodeURIComponent(state.currentSearch);
    const url = `${baseUrl}?q=${query}&page=${state.currentPage}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        state.totalPages = Math.ceil(data.num_found / 100); 
        return data.docs;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    } finally {
        state.isLoading = false;
    }
}
