import React from 'react';
class Form extends React.Component {
    constructor(){
        super();
        this.state={username:'', age:null, errorMessage:''};
    };

changeHandler=(e)=>{ 
    let elementName=e.target.name;
    let elementValue=e.target.value;
    let err="";
    if(elementName==="age"){
    if(elementValue!==""  && !Number(elementValue)){
        err=<span style={{color:"red"}}>Yoshni kiritishda son ishlatish kerak</span>
    }}
    this.setState({errorMessage:err})
    this.setState({[elementName]:elementValue})
};

    render(){
         return <form>
                <h1>Salom {this.state.username} {this.state.age}</h1>
                <p>Ismingizni kiriting:</p>
                <input name="username" onChange={this.changeHandler}/>
                <p>Yoshingizni kiriting:</p>
                <input name="age" onChange={this.changeHandler}/>
                {this.state.errorMessage}
                </form>
    }
}

export default Form;
