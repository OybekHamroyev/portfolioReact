import axios from 'axios';
import {useState, useEffect} from 'react';
const App = () => {
    const [updatedAt, setUpdatedAt] = useState(null)
    useEffect(() => { //put yangilash
        axios.put('https://reqres.in/api/articles/1').then(res=>{console.log(res.data.updatedAt); setUpdatedAt(res.data.updatedAt)}).catch(error=>console.error("Xatolik"))
    }, []);
if(!updatedAt) return "Загрузка...";
    return (
        <div>
            Put request
            <p>{updatedAt}</p> {/*sanini har obnovit qilganda yangilaydi */}
        </div>
    );
};
export default App;