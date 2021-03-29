import axios from 'axios';
// server endpoint
//heroku
const url = 'https://real-estate-shop.herokuapp.com/users';
// localhost
// const url = 'http://localhost:80/users';

export const createUser = (newUser) => axios.post(url, newUser);