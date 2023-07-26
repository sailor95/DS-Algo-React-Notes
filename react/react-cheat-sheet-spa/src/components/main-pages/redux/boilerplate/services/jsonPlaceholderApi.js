import ApiService from './Api';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const client = new ApiService({
    baseURL: BASE_URL
});

const jsonPlaceholderApi = {};

jsonPlaceholderApi.getPosts = () => client.get(`/posts`);
jsonPlaceholderApi.getPostById = id => client.get(`/post/${id}`);

export default jsonPlaceholderApi;