import React from 'react';
class Form extends React.Component {
    constructor(){
        super();
        this.state={username:''}
    }
changeHandler=(e)=>{
    this.setState({username:e.target.value})
}
    render(){   //render ning ichida shartdan foydalanish
        let header="";
        if (this.state.username) {header=<h1>Salom {this.state.username}</h1>}
        else {header=""}
        return <form>
            {header}
            Ismingiznikiriting:
            <input onChange={this.changeHandler}/>
        </form>
    }
}

export default Form;