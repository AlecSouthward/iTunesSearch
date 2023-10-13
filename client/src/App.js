import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Favorites from './components/Favorites.js';
import ItunesSearch from './components/ItunesSearch.js';
import './App.css'

const Nav = () => (
    <div>
      <ul>
        <li><Link style={{color:'black', textDecoration:'none'}} to="/">Search</Link></li>
        <li><Link style={{color:'black', textDecoration:'none'}} to="/favorites">Favorites</Link></li>
      </ul>
    </div>
  );

// Main App component
export default function App() {
    return (
        <Router>
            <div>
                <Nav />

                <Routes>
                    {/* Route for the iTunes search component */}
                    <Route exact path='/' element={<ItunesSearch />} />
                    
                    {/* Route for the favorites component */}
                    <Route path="favorites" element={<Favorites />} />
                </Routes>
            </div>
        </Router>
    );
}
