import axios from 'axios';

const getAllProducts = async () => {
    const url = 'https://dummyjson.com/products';
    const response = await axios.get(url);
    return response.status === 200 ? response.data : {};
}
const getDetailProductById = async (id) => {
    const url = `https://dummyjson.com/products/${id}`;
    const response = await axios.get(url);
    return response.status === 200 ? response.data : {};
}

export const api = {
    getAllProducts,
    getDetailProductById
}