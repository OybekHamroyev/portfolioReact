import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
import './modal.scss';
import img1 from './img/img (1).jpg';
import img2 from './img/img (2).jpg';
import img3 from './img/img (3).jpg';
import img4 from './img/img (4).jpg';
import img5 from './img/img (5).jpg';
import img6 from './img/img (6).jpg';
const Carousel = () => {
    const handleDragStart=(e)=>{ e.preventDefault()}
    const items=[
        <img src={img1} onDragStart={handleDragStart}/>,
        <img src={img2} onDragStart={handleDragStart}/>,
        <img src={img3} onDragStart={handleDragStart}/>,
        <img src={img4} onDragStart={handleDragStart}/>,
        <img src={img5} onDragStart={handleDragStart}/>,
        <img src={img6} onDragStart={handleDragStart}/>
    ]
    return (
        <div>
            <AliceCarousel disableButtonsControls autoPlay={true} autoWidth infinite 
            autoPlayInterval={1000} mouseTracking items={items}/>
        </div>
    );
};

export default Carousel;