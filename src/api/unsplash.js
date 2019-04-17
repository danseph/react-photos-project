import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c64a8b06a298aab2d3041d9135d66f98bd0f6d5156b8c50a7af1aab44eaede90'
    } 
})