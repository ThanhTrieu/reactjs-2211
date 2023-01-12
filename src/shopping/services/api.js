import axios from 'axios';

const getAllDataProducts = async () => {
    const urlApi = `https://fakestoreapi.com/products`;
    const response = await axios.get(urlApi);
    return response.status === 200 ? response.data : [];
}