import React, { PureComponent } from 'react';
import './main.css';
class AppState extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            name:"Javohir",
            age:18,
            job:"Frontent defeloper",
            data:new Date(),
            count:0
        }
    }
    decrement(){
        if(this.state.count>0){
        this.setState({ count:this.state.count-1});}
    }
    increment(){
        this.setState({ count:this.state.count+1});
    }

    //yoki bunday yozish m.n
    reset=()=> {
        this.setState({ count:0  });
    }
    render() { 
        console.log(this.state)
    
        return ( 
            <div className="main">
                <h1>My name is {this.state.name}</h1>
                <p style={{color:"green"}}>He is {this.state.age} years old</p>
                <h2>He is {this.state.job}</h2>
                <h3>It is {this.state.data.toLocaleDateString()}</h3>
                <hr/>
                <button onClick={()=>this.decrement()}>-</button>
                <button onClick={()=>this.increment()}>+</button>
                <button onClick={this.reset}>reset</button>
                <h1>{this.state.count}</h1>
            </div>
         );
    }
}
 
export default AppState;