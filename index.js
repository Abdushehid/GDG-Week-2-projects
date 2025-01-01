const axios = require('axios'); 

async function fetchData() {
    try {
        const response = await axios.get('https://api.example.com/data'); // Replace with the actual API endpoint
        console.log(response.data); 
    } catch (error) {
        console.error('Error fetching data:', error); 
    }
}

fetchData();