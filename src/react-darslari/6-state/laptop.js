//state ning vazifasi komponentga tegishli xossalarni saqlash. Qachinki state o'zgarsa komponent qaytadan render qilinadi
//unda xoxlagancha uzgaruvchular saqlanadi
import React from 'react';
class Laptop extends React.Component {
    constructor(){
        super();  ///constructor da super() ishlatiladi
        this.state={
            brand:"dell",
            model:"vostro",
            color:"black",
        }
    }

    changeLaptop=()=>{
        this.setState({model:"inspiron", color:"silver", size:15});         //statega saqlaydi, shuningdek yangi xususiyat ham qushadi
    }

    render(){
        return (<div>
                <h1>{this.state.brand}</h1>                {/*statedan olish */}
                <p>Model:{this.state.model}<br/>
                Color: {this.state.color}<br/>
                Size:{this.state.size}</p>
            <button onClick={this.changeLaptop}>Modelni o'zgartirish</button>
            </div>
        )
    }
}

export default Laptop;
