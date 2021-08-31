import React from 'react';
class Car extends React.Component {
  
    signal=(sound, evt)=>{    ///kelgan(Beep 3!) va event ni parametr ga beramiz
        alert(sound+", hodisa turi: "+evt.type)  
    }
    render(){ ///() fya orqali event turini ham yuborish m.n.  
        return <button onClick={(event)=>this.signal("Beep 3!", event)}>signal berish</button>
    }
}
export default Car;