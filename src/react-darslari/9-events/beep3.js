import React from 'react';
class Car extends React.Component {
  
    signal=(sound)=>{    ///kelgan(Beep 3!) ni parametr ga beramiz
        alert(sound)  
    }
    render(){ ///Parametr uzatish uchun () anonim fyadan foyd
        return <button onClick={()=>this.signal("Beep 3!")}>signal berish</button>
    }
}
export default Car;