///props - argumentlarni componentga uzatish
//props ni state dan farqi u read only hisoblanadi, va yuqqodidagi komponentda quyi komponentga ma'lumot uzatish u.n ishl
import React from 'react';
class Laptop extends React.Component {
//constructorda ham ishlatish mumkin props
//props qiymatini o'zgartirmoqchi bulsak xatolik ro'y beradi
//propsni o'zgart uchun pure function(sof funcsiya) ishlatiladi
//sof fya berilgan argumentni o'zgartirmaydi va tashqi o'zgaruvchiga suyanmaydi (function.js)

// constructor(props){  //buni yozish shart emas props ishlayveradi
//     super()
// }

    render(){
        return <h3>Shu {this.props.brand} laptop siz uchun.</h3>
    }
}

export default Laptop;