import axios from "axios";

export const loginUser = async ({username, password}) => {
    //const url = `http://api.cuongnh2k.space/api/basic/login`;
    const response = await axios({
        method: 'post',
        url: 'https://fakestoreapi.com/auth/login',
        data: {
            password: password,
            username: username
        }
    });
    return response.status === 200 ? response.data : null;
}