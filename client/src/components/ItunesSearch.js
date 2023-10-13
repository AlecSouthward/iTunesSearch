<<<<<<< HEAD
import React, { useState } from "react";
import './ItunesSearch.css';
import axios from 'axios';

// ItunesSearch component responsible for searching and displaying iTunes results
function ItunesSearch() {
    // State variables for search query and search results
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // Function to search iTunes API based on the user's query
    const searchiTunes = async () => {
        try {
            // Send a GET request to the server's /search endpoint with the user's query
            const response = await axios.get(`/search/${query}`);
            // Update the results state with the response data from the server
            setResults(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    // Render the search bar, search button, and search results
    return (
        <div>
            {/* Search bar and button */}
            <div className='search-bar'>
                <input
                    type="text"
                    placeholder="Search for content..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={searchiTunes}>Search</button>
            </div>

            {/* Display search results */}
            <div className="results">
                {results.map((item) => (
                    <div className='song' key={item.trackId}>
                        {/* Display track name, artwork, and artist name */}
                        <h2>{item.trackName}</h2>
                        <img src={item.artworkUrl60} alt={'Artwork for ' + item.trackName}></img>
                        <p>{item.artistName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItunesSearch;
=======
import React, { useState } from "react";
import './ItunesSearch.css';
import axios from 'axios';

// ItunesSearch component responsible for searching and displaying iTunes results
function ItunesSearch() {
    // State variables for search query and search results
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // Function to search iTunes API based on the user's query
    const searchiTunes = async () => {
        try {
            // Send a GET request to the server's /search endpoint with the user's query
            const response = await axios.get(`/search/${query}`);
            // Update the results state with the response data from the server
            setResults(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    // Render the search bar, search button, and search results
    return (
        <div>
            {/* Search bar and button */}
            <div className='search-bar'>
                <input
                    type="text"
                    placeholder="Search for content..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={searchiTunes}>Search</button>
            </div>

            {/* Display search results */}
            <div className="results">
                {results.map((item) => (
                    <div className='song' key={item.trackId}>
                        {/* Display track name, artwork, and artist name */}
                        <h2>{item.trackName}</h2>
                        <img src={item.artworkUrl60} alt={'Artwork for ' + item.trackName}></img>
                        <p>{item.artistName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItunesSearch;
>>>>>>> a9746564701b9bf28550d2a070bdff1e48c3a263
