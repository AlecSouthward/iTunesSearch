import React, { useState } from "react";
import './ItunesSearch.css';

// ItunesSearch component responsible for searching and displaying iTunes results
function ItunesSearch() {
    // State variables for search query and search results
    const [termQuery, setTermQuery] = useState('');
    const [mediaQuery, setMediaQuery] = useState('all');
    const [results, setResults] = useState([]);

    // Function to search iTunes API based on the user's query
    const searchiTunes = async () => {
        try {
            // Send a GET request to the server's /search endpoint with the user's query
            const response = await fetch(`/api/search/${termQuery}/${mediaQuery}`);

            // Update the results state with the response data from the server
            setResults(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    // Function to add favorites to the favorites.json file
    const addToFavorites = async (res) => {
        try {
            // Makes a POST request to the api to add a new favorite
            await fetch('/api/favorites/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(res),
              });
        } catch (error) {
            console.error("Error posting to favorites: ", error)
        }
    };

    // Render the search bar, search button, and search results
    return (
        <div>
            {/* Search bar, button, and filters */}
            <div className='search-bar'>
                {/* Search button */}
                <input
                    type="text"
                    placeholder="Search for content..."
                    value={termQuery}
                    onChange={(e) => setTermQuery(e.target.value)}
                />

                <div className='radio-list'>
                    <p style={{ marginBottom: 5 }}>Searching specifically for:</p>

                    {/* Button to filter search for music only */}
                    <input
                        type="radio"
                        id='music'
                        name='media'
                        onChange={(e) => setMediaQuery(e.target.id)}/>
                    <label htmlFor='music'>Music</label>

                    {/* Button to filter search for movies only */}
                    <input
                        type="radio"
                        id='movie'
                        name='media'
                        onChange={(e) => setMediaQuery(e.target.id)}/>
                    <label htmlFor='movie'>Movie</label>

                    {/* Button to filter search for tv shows only */}
                    <input
                        type="radio"
                        id='tvShow'
                        name='media'
                        onChange={(e) => setMediaQuery(e.target.id)}/>
                    <label htmlFor='tvShow'>TV Show</label>

                    {/* Button to filter search for podcasts only */}
                    <input
                        type="radio"
                        id='podcast'
                        name='media'
                        onChange={(e) => setMediaQuery(e.target.id)}/>
                    <label htmlFor='podcast'>Podcast</label>
                    
                    {/* Button to not filter anything and show every result */}
                    <input
                        type="radio"
                        checked={mediaQuery == '' || mediaQuery == 'all'}
                        id='all'
                        name='media'
                        onChange={(e) => setMediaQuery(e.target.id)}/>
                    <label htmlFor='all'>All</label>
                </div>

                <button onClick={searchiTunes}>Search</button>
            </div>

            {/* Instructions to help the user */}
            <p className="instructions">{results.length == 0 ? `Use the search bar and the filter buttons
                to find the song, movie, tv show, etc. that you are looking for. When you are
                ready to search, press the Search button to start.` : ''}</p>

            {/* Display search results */}
            <div className="results">
                {results.map((item) => (
                    <div className='song' key={item.trackId}>
                        {/* Display track name, artwork, and artist name */}
                        <h2>{item.trackName}</h2>
                        <img src={item.artworkUrl60} alt={'Artwork for ' + item.trackName}></img>
                        <p>{item.artistName}</p>

                        {/* Button to favorite songs, movies, etc. */}
                        <button className="favorite-button" onClick={() => addToFavorites({
                            trackId: item.trackId,
                            trackName: item.trackName,
                            artistName: item.artistName,
                            artworkUrl60: item.artworkUrl60
                        })}>&hearts;</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItunesSearch;
