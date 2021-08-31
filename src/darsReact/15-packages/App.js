import Carousel from './Carousel';
import AppModalVideo from './ModalVideo';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleLightbox from './SimpleLightbox';

const App = () => {
    return (
        <div>
            <AppModalVideo/>
            <Carousel/>
            <SimpleLightbox/>
        </div>
    );
};

export default App;