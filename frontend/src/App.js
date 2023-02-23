import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BookSearch from './BookSearch';
import * as PropTypes from "prop-types";
import HomePage from "./HomePage";

function Switch(props) {
    return null;
}

Switch.propTypes = {children: PropTypes.node};

function App() {
    return (
        <Router>
            <Routes>
                {/*<Route path="/" element={<HomePage />} />*/}
                <Route path="/" element={<BookSearch />} />
            </Routes>
        </Router>
    );
}

export default App;
