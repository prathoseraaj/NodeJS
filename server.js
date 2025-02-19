//fetch and play with api

const http = require('http');
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const fetchdata = async(url) => {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com${url}`);
        return response.data;
    }
    catch(error){
        throw new Error('Failed to fetch data');
    }
};





