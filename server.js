const express = require('express');
const axios = require('axios');
const fs = require('fs'); // Import the 'fs' module for file system operations
const app = express();
const PORT = 8080;

app.use(express.json());

const favFilePath = 'favorites.json'; // Path to the JSON file where favorites are stored
let favorites = []; // Array to store favorite items

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,
            'client', 'build', 'index.html'));
    });
}

// Attempt to read data from the JSON file when the application starts
try {
    const data = fs.readFileSync(favFilePath);
    favorites = JSON.parse(data);
} catch (error) {
    console.error("Error reading data from file:", error.message);
}

// iTunes Search API endpoint
app.get('/search/:query', async (req, res) => {
    const { query } = req.params;
    try {
        // Send a request to iTunes API based on the user's search query
        const response = await axios.get(`https://itunes.apple.com/search?term=${query}`);
        res.json(response.data);
    } catch (error) {
        // Handle errors if the request to iTunes API fails
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API endpoint to handle adding favorite items
app.post('/favorites', (req, res) => {
    const favoriteItem = req.body;
    // Add the favorite item to the favorites array
    favorites.push(favoriteItem);
    // Save the updated favorites array to the JSON file
    fs.writeFileSync(favFilePath, JSON.stringify(favorites));
    // Send a success response to the client
    res.status(200).json({ message: 'Item added to favorites' });
});

// API endpoint to retrieve favorite items
app.get('/favorites', (req, res) => {
    // Return the favorites data stored on the server
    res.json(favorites);
});

// Start the Express server on the specified port
app.listen(PORT, () => {
    console.log(`API Server is running on port ${PORT}`);
});