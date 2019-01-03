import axios from 'axios';

const KEY = 'AIzaSyDQEvMNPJsfLW700ewKtlPG9vIKfxNcNc8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
