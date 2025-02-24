//fetch and play with api 

const http = require('http');
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

const fetchData = async(url) => {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com${url}`);
        return response.data;
    }
    catch(error){
        throw new Error('Failed to fetch data');
    }
};

app.get('/:resource', async (req ,res) =>{
    const {resource} = req.params;
    try{
        const data = await fetchData(`/${resource}`);
        res.json(data);       
    }
    catch(error){
        res.status(500).send(error.message);
    }
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})


