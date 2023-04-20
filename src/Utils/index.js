import axios from 'axios';

export const apiInstance = axios.create({
    //baseURL: 'https://us-central1-green-mountain-synergy.cloudfunctions.net/api'
    baseURL:'http://localhost:5001/joshuaforvermont/us-central1/api'
})