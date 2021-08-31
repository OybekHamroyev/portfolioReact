import React, { Component } from 'react';
class Nimadir extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor is working...")
        this.state = {  }
    }
    componentDidMount(){
        console.log('ComponentDidMount is working...') //masalan api dan ma'lumot olishda
    }
    componentWillMount(){
        console.log('ComponentWillMount is working...')
    }
    render() { 
        return ( 
            <div>

            </div>
         );
    }
}
 
export default Nimadir;