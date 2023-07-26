import axios from 'axios';

const get = async params => {
    const response = await axios.get(`path${params}`);
    console.log(response);
    return response.data;
};

export default {
    get
};