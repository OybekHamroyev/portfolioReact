import { UserContext } from './UserContext'; //foydalanuvchi Context ni chaqiramiz
import CompC from './CompD';
function AppContext() {
    ///Provider orqali ma'lumotni yuboramiz
    return  <UserContext.Provider value={"Farkhod"}>     
               <CompC/>
            </UserContext.Provider>
}
export default AppContext;