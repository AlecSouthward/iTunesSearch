<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Favorites component responsible for displaying favorite items
function Favorites() {
    // State variable to store favorite items retrieved from the server
    const [favorites, setFavorites] = useState([]);

    // useEffect hook to fetch favorites from the server when the component mounts
    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                // Send a GET request to the server's /favorites endpoint to retrieve favorite items
                const response = await axios.get('/favorites');
                // Update the favorites state with the response data from the server
                setFavorites(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        // Call the fetchFavorites function when the component mounts
        fetchFavorites();
    }, []); // Empty dependency array ensures that this effect runs once after the initial render

    // Render favorite items
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Favorites</h1>
            <div className="favorites-list">
                {/* Map through favorite items and display track name, artwork, and artist name */}
                {favorites.map((item) => (
                    <div className='song' key={item.trackId}>
                        <h2>{item.trackName}</h2>
                        <img src={item.artworkUrl60} alt={'Artwork for ' + item.trackName}></img>
                        <p>{item.artistName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorites;
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Favorites component responsible for displaying favorite items
function Favorites() {
    // State variable to store favorite items retrieved from the server
    const [favorites, setFavorites] = useState([]);

    // useEffect hook to fetch favorites from the server when the component mounts
    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                // Send a GET request to the server's /favorites endpoint to retrieve favorite items
                const response = await axios.get('/favorites');
                // Update the favorites state with the response data from the server
                setFavorites(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        // Call the fetchFavorites function when the component mounts
        fetchFavorites();
    }, []); // Empty dependency array ensures that this effect runs once after the initial render

    // Render favorite items
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Favorites</h1>
            <div className="favorites-list">
                {/* Map through favorite items and display track name, artwork, and artist name */}
                {favorites.map((item) => (
                    <div className='song' key={item.trackId}>
                        <h2>{item.trackName}</h2>
                        <img src={item.artworkUrl60} alt={'Artwork for ' + item.trackName}></img>
                        <p>{item.artistName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorites;
>>>>>>> a9746564701b9bf28550d2a070bdff1e48c3a263
