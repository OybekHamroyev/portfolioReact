import React from 'react';
import Categories from './homePage/Categories';
import Home from './homePage/Home';
import Nav from './homePage/Nav';
import SmartWatches from './homePage/recommended/SmartWatches';
import './homePage/styles/main.scss'
const App = () => {
    return (
        <div className="App"> 
            <Nav/>
            <Categories/>
            <Home/>
            <SmartWatches/>
        </div>
    );
};


export default App;