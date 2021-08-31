import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ChartsCopm from './ChartsCopm';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <ChartsCopm/>
            </BrowserRouter>
        </div>
    );
};

export default App;