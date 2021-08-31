import React from 'react';
class Car extends React.Component {

    signal(){
        alert("Beep")
    }
    render(){
        return <div>
            <button onClick={this.signal}>Singnal bosish</button>
        </div>
    }
}
export default Car;