import React, { PureComponent } from 'react';
import ComponentA from "./components/ComponentA";
import {UserProvider} from './components/userContext'
class App extends PureComponent {
    render() { //UserProvider ichidagi barcha komponentlar context ichidagi ma'lumotdan foydalanishi mumkin value ga qiymat beramiz
                //value qiymati componentlarga uzatiladi
        return ( 
            <UserProvider value="Farkhod">
                <ComponentA/>
            </UserProvider>
            
         );
    }
}
 
export default App