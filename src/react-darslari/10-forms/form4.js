import React from 'react';
class Form extends React.Component {
    constructor(){
        super();
        this.state={username:'', age:null};
    }
changeHandler=(e)=>{ /// 1ta changeHandler yordamida bir nechta elemni boshqarish
    let elementName=e.target.name;  // o'zgaruvchi yaratamiz (forma elem.ning name attrib qiymati)
    let elementValue=e.target.value; // o'zgaruvchi yaratamiz (forma elem.ning value attrib qiymati)
    this.setState({[elementName]:elementValue}) //(o'zgarchi-1 ni state xususiyatiga [] orqali berish): (o'zgar-2 ni state qiymatiga berish)
}

    render(){ 
        return <form>
            <h1>Salom {this.state.username} {this.state.age}</h1>
            <p>Ismingiznikiriting:</p>
            <input name="username" onChange={this.changeHandler}/>
            <p>Yoshingizni kiriting:</p>
            <input name="age" onChange={this.changeHandler}/>
        </form>
    }
}

export default Form;
