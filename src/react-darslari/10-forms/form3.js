import React from 'react';
class Form extends React.Component {
    constructor(){
        super();
        this.state={username:''}
    }
changeHandler=(e)=>{
    this.setState({username:e.target.value})
}
handleSubmit=(e)=>{
    e.preventDefault();
   alert(this.state.username)
}
    render(){ 
        return <form onSubmit={this.handleSubmit}>
            <h1>Salom {this.state.username}</h1>
            Ismingiznikiriting:
            <input onChange={this.changeHandler}/>
            <input type="submit" value="jo'natmoq"/>
        </form>
    }
}

export default Form;