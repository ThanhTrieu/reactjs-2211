import axios from "axios";

export const loginUser = async ({username, password}) => {
    const response  = await axios({
        method: 'post',
        url: 'https://dummyjson.com/auth/login',
        data: {
            password: password,
            username: username
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return (await response.status === 200 || await response.status === 400) ? await response.data :  null;
}