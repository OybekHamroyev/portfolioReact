import { PureComponent } from 'react';
class ClassCounter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { count:7 }
    }
    // setCount=()=>{
    //     this.setState({ count:this.state.count+1  });
    // }

    setCount(number){ //kelgan qiymatni statega beramiz
        this.setState({ count:number });
    }
    render() { 
        return ( 
            // <button onClick={this.setCount}>Count {this.state.count}</button>

            //yoki onClick bulganda fya ichidagi qiymatni 1 taga oshirib, setCount(yuqoridagi) ga yuboramiz
            <button onClick={()=>this.setCount(this.state.count+1)}>Count {this.state.count}</button>
            );
    }
}
 
export default ClassCounter;