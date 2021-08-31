import { PureComponent } from 'react';
import  {UserConsumer} from './userContext';
class ComponentD extends PureComponent {
    render() { 
        return ( 
        <UserConsumer>
            { //context ichidagi ma'lumotlaer
            (userName)=>{   //funksiya orqali qabul qilamiz
               return <div>Assalomu aleykum {userName}</div> }
            }
        </UserConsumer> 
        )
    }
}
 
export default ComponentD;