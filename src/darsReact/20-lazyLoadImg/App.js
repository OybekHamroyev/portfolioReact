import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src//effects/blur.css'; //effect ni import qilasmiz
import 'react-lazy-load-image-component/src/effects/black-and-white.css' //buni ham inport 
import 'react-lazy-load-image-component/src/effects/opacity.css';

import './main.css';
import img1 from './img/img (1).jpg'
import img2 from './img/img (2).jpg'
import img3 from './img/img (3).jpg'
import img4 from './img/img (4).jpg'
const App = () => {
    const style={width:'25%'}
    return (
        <div className="block">
            <h4>LazyLoadImage</h4>
            <LazyLoadImage
                src={img1}
                style={style}
                effect="blur"
                delayTime="1500"
            />
            <LazyLoadImage src={img2} style={style} effect="black-and-white" delayTime="2000"/>
            <LazyLoadImage src={img3} style={style} effect="opacity" delayTime="4000"/>
            <LazyLoadImage style={style} src  placeholderSrc={<h3>Loading...</h3>}/>
            <LazyLoadImage src={img4} style={style} effect="opacity" delayTime="4000"/>
        
        </div> 
    );
};

export default App;