import React from 'react';

class Clock extends React.Component { //yangilanib turuvchi soat har sekundda
constructor(){
    super();
    this.state={date:new Date()} //state ga boshlangich qiymat(vaqt) beramiz
}
componentDidMount(){ // bu component render qilingandan keyin ishgatushadi
    this.timerID=setInterval(() => {
        this.thick() //setinterval orqali har sekundda thick() ni chqiramaiz va timerID ga qiymat qilib beramiz
    }, 1000);
}

componentWillUnmount(){ //componentni o'cirishdan oldin bajariladigan funksiya
    // qiymatni xotiradan tozalaymiz
    clearInterval(this.timerID) ///olgan qiymatni 1 sekdan keyin tozlaydo
}
thick(){
    this.setState({date:new Date()}) //state ga yangi qiymat beramiz(setState orq)
}
    render() {
        return <div>Hozir soat {this.state.date.toLocaleTimeString()} bo'ldi</div>
    }
}
export default Clock;