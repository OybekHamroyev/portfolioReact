//sideEffect larni boshqarish uchun useEffect ishlatiladi
import { PureComponent } from 'react';
import Datafetching from './dataFetching';

class App extends PureComponent {
    render() { 
        return ( <Datafetching/> );
    }
}
 
export default App;