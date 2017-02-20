const SELECT_BOOK = "SELECT_BOOK";

export default function(book) {
    return {
        type: SELECT_BOOK,
        selectBook: console.log('book selected:', book.title)
    }
}
