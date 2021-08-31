import React, { PureComponent } from 'react';
import ComponentD from './ComponentD';
class ComponentC extends PureComponent {
    render() { 
        return ( <div>
            <ComponentD/>
        </div>);
    }
}
 
export default ComponentC;