import React, { PureComponent } from 'react';
import ComponentB from './ComponentB'
class ComponentA extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <ComponentB/>
        </div>);
    }
}
 
export default ComponentA;