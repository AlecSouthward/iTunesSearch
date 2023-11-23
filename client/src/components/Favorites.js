import React, { useState, useEffect } from 'react';
import './Favorites.css'

// Favorites component responsible for displaying favorite items
function Favorites() {
    // State variable to store favorite items retrieved from the server
    const [favorites, setFavorites] = useState([]);

    // useEffect hook to fetch favorites from the server when the component mounts
    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                // Fetches the favorites from the api
                fetch('/api/favorites/')
                    // Returns the response in a json format
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        }
                    })

                    // Sets the favorites array to match the json file
                    .then(data => {
                        setFavorites(data);
                    })
                    
                    // Catch any errors that occur
                    .catch(error => {
                        console.error("Error loading favorites: ", error);
                    })
            } catch (error) {
                console.error(error);
            }
        };
        // Call the fetchFavorites function when the component mounts
        fetchFavorites();
    }, []); // Empty dependency array ensures that this effect runs once after the initial render

    // removeFavorite removes a favorite by its id
    const removeFavorite = async (trackId) => {
        try {
            // DELETEs the specific favorite by trackId
            await fetch(`/api/favorites/${trackId}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
        } catch (error) {
            console.error("Error deleting favorite: ", error);
        }
        // After the element is deleted, refresh the page
        finally {
            window.location.reload();
        }
    }

    // Render favorite items
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Favorites</h1>
            <div className="favorites-list">
                {/* Message to display if there are any favorites or not */}
                <h3 style={{textAlign:'center'}}>
                    {favorites.length == 0 ? 'No favorites found.': ''}</h3>

                {/* Map through favorite items and display track name, artwork, and artist name */}
                {favorites.map((item) => (
                    <div className='song' key={item.trackId}>
                        <h2>{item.trackName}</h2>
                        <img src={item.artworkUrl60} alt={'Artwork for ' + item.trackName}></img>
                        <p>{item.artistName}</p>

                        {/* Button to delete favorites from the favorites.json file */}
                        <button className='delete-button'
                            onClick={() => removeFavorite(item.trackId)}>&#9747;</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorites;
