import React, { Component } from 'react';
import ComponentC from './ComponentC'
class ComponentB extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <ComponentC/>
        </div>);
    }
}
 
export default ComponentB;