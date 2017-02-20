const BOOK_SELECTED = "BOOK_SELECTED";

//selectBook is an ActionCreator  and it needs to return an action,
// an object with a type property
export default function selectBook(book) {
    return {
        type: BOOK_SELECTED,
        payload: book
    }
}
