export const getBookList = (booklist) => {
    return {
        type: 'GET_BOOK_LIST',
        payload: booklist
    }
}