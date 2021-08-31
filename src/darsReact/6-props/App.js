import React from 'react';
import Component from './components/MyApp';
import ComponentClass from './components/MyApp2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap'
function App() {
    return <><Component name="Javohir" age="17"/>
            <ComponentClass info="This is React tutorial"/>
            
            </>
}

export default App;