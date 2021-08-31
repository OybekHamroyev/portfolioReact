import {useContext} from 'react';
import {UserContext}  from './UserContext' //yaratilgan UserContextni chaqiramiz
function AppContext() {
    const user=useContext(UserContext); //useContext ni (Consumer )sifatida ishlatamiz. 
                                        //Context ni ishlatish uchun UserContext ni argument sifatida beramiz va user ga saqlaymiz
    return <h3>Salom {user}</h3>
}
export default AppContext;