import React from 'react';
class Form extends React.Component {
    constructor(){
        super();
        this.state={username:''}
    }
handler=(e)=>{
    this.setState({username:e.target.value})
}
    render(){
        return <form>
            <h3>Salom { this.state.username}</h3>
            <input onChange={this.handler}/>
        </form>
    }
}

export default Form;