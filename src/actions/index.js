export const BOOK_SELECTED = "BOOK_SELECTED";
export const AUTHOR_SELECTED = "AUTHOR_SELECTED";

//selectBookAction is an ActionCreator and it needs to return an action,
//an object with a type property
export function selectBookAction(book) {
    return {
        type: BOOK_SELECTED,
        payload: book
    }
}

export function selectAuthorBooksAction(author, books) {
    return {
        type: AUTHOR_SELECTED,
        payload: books.filter(book => book.author === author.name)
    }
}
