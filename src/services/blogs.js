import axios from 'axios';
const baseUrl = '/api/blogs';

const getUserBlogs = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data);
};

export default { getUserBlogs };