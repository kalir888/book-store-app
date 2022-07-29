export const getBookList = (state = [], action) => {
    switch(action.type) {
        case 'GET_BOOK_LIST':
            console.log(action.payload)
            return {
                ...state,books: action.payload
            };
        default:
            return state;
    }
}