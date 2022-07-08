import axios from 'axios';

export const userSignin = (userObj) => {
    let response = axios.post('http://localhost:5000/api/v1/users/signin',userObj);
    return response;
}

export const userSignup = (userObj) => {
    let response = axios.post('http://localhost:5000/api/v1/users/signup',userObj);
    return response;
}