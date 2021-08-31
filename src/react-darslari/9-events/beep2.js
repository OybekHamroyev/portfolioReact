import React from 'react';
class Car extends React.Component {
    signalSound;  ///o'zgaruvchi e'lon qilamiz
    constructor(){
        super();
        this.signalSound="Beep! Beep!"; //o'zgga saqlaymiz
    }
    signal=()=>{    ///this ni ishlashi u.n o'q funksiya ishlatiladi
        alert(this.signalSound)  
    }
    render(){
        return <button onClick={this.signal}>signal berish</button>
    }
}
export default Car;