import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import './index.css';
import SearchResult from './pages/SearchResult';
import Movies from './pages/Movies';

function App() {
        return (   
            <div className="App">
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/search-result" element={<SearchResult />} />
                        <Route path="/movies" element={<Movies />} />
                    </Routes>
                 </Router>
            </div>    
        )
}

export default App;
