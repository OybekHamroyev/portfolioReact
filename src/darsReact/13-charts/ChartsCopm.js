import './master.css';
import React from 'react';
import SimpleChart from './SimpleChart';
import { Route } from 'react-router-dom';
import Grafik from './Grafik';

const ChartsCopm = () => {
    return (
        <div>
            <Route path="/" exact>
                <SimpleChart/>
            </Route>
            <Route path="/grafik" component={Grafik}/>
        </div>
    );
};

ChartsCopm.propTypes = {};

export default ChartsCopm;