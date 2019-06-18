import axios from 'axios';

const ApiRestaurantes = axios.create({
   baseURL: 'http://challange.goomer.com.br'
});

export { ApiRestaurantes };
