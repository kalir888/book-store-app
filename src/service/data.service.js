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