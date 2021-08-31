import React from "react";
import ReactDOM from 'react-dom';

const myElement=React.createElement('h3',  {style:{color:"red"}},"salomvv");
ReactDOM.render(myElement, document.getElementById('first'));


ReactDOM.render(<h3 style={{color:'red'}}>Salom</h3>, document.getElementById('second'));
