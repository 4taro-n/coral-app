import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import firbase from './components/firebase/Firebase';

import './App.css';

import ScrollToTop from './components/ScrollToTop';

import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import NewsPage from './components/pages/NewsPage';
import ServicesPage from './components/pages/ServicesPage';
import Recruit from './components/pages/Recruit';
import EditerPage from './components/pages/EditerPage';
import NewsPageOne from './components/pages/NewsPageOne';
import CerecPage from './components/pages/CerecPage';

const App = () => {
    return (
        <div>
            <Router>
                <ScrollToTop />
                {/* <Navbar /> */}
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/NewsPage"  element={<NewsPage/>} />
                    <Route exact path="/ServicesPage" element={<ServicesPage/>} />
                    <Route exact path="/Recruit"  element={<Recruit/>} />
                    <Route exact path="/EditerPage"  element={<EditerPage/>} />
                    <Route path="NewsPage/:id" element={<NewsPageOne />} />
                    <Route path="CerecPage" element={<CerecPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
