import axios from 'axios';

const token = localStorage.getItem('token');

const headerConfig = {
    headers: {
        "Authorization" : `Bearer ${token}`
    }
}

export const getAllBooks = () => {
    let response = axios.get('http://localhost:5000/api/v1/books');
    return response;
}

export const getAllComments = (bookId) => {
    let response = axios.get(`http://localhost:5000/api/v1/comments/${bookId}`);
    return response;
}

export const addComment = (bookId, commentObj) => {
    let response = axios.post(`http://localhost:5000/api/v1/comments/${bookId}`, commentObj, headerConfig);
    return response;
}

export const addToCart = (bookId) => {
    let response = axios.post(`http://localhost:5000/api/v1/carts/${bookId}`, null, headerConfig);
    return response;
}

export const getCart = () => {
    let response = axios.get(`http://localhost:5000/api/v1/carts`,headerConfig);
    return response;
}

export const updateCart = (bookId,updateObj) => {
    console.log(updateObj);
    let response = axios.put(`http://localhost:5000/api/v1/carts/${bookId}`, updateObj, headerConfig);
    return response;
}

export const deleteFromCart = (bookId) => {
    let response = axios.delete(`http://localhost:5000/api/v1/carts/${bookId}`, headerConfig);
    return response;
}

export const addToWishlist = (bookId) => {
    let response = axios.post(`http://localhost:5000/api/v1/wishlists/${bookId}`, null, headerConfig);
    return response;
}

export const getWishlist = () => {
    let response = axios.get(`http://localhost:5000/api/v1/wishlists`, headerConfig);
    return response;
}

export const deleteFromList = (bookId) => {
    let response = axios.delete(`http://localhost:5000/api/v1/wishlists/${bookId}`, headerConfig);
    return response;
}

export const addCustomerInfo = (customerObj) => {
    let response = axios.post(`http://localhost:5000/api/v1/customers`, customerObj, headerConfig);
    return response;
}

export const placeOrder = () => {
    let response = axios.put(`http://localhost:5000/api/v1/orders`, null, headerConfig);
    return response;
}