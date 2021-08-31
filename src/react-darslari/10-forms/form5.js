import React from 'react';
///1 ta handler yordamida backend ga submit qilganda  validatsiya qilish
class Form extends React.Component {
    constructor(){
        super();
        this.state={username:'', age:null};
    };

submitHandler=(e)=>{
        e.preventDefault();
        if (!Number(this.state.age))
        {alert('Yoshni kiritishda raqam kiriting');}
    };
changeHandler=(e)=>{ 
    let elementName=e.target.name;
    let elementValue=e.target.value;
    this.setState({[elementName]:elementValue})
};

    render(){
         return <form onSubmit={this.submitHandler}>
                <h1>Salom {this.state.username} {this.state.age}</h1>
                <p>Ismingizni kiriting:</p>
                <input name="username" onChange={this.changeHandler}/>
                <p>Yoshingizni kiriting:</p>
                <input name="age" onChange={this.changeHandler}/>
                <input type="submit" value="Send"/>
               </form>
    }
}

export default Form;
