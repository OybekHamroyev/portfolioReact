import SimpleReactLightbox from "simple-react-lightbox";
import {SRLWrapper} from 'simple-react-lightbox';

import img1 from './img/img (1).jpg';
import img2 from './img/img (2).jpg';
import img3 from './img/img (3).jpg';
import img4 from './img/img (4).jpg';
import img5 from './img/img (5).jpg';
import img6 from './img/img (6).jpg';
const SimpleLightbox = () => {
    return (
        <SimpleReactLightbox>
<SRLWrapper>
    <img src={img1} alt="gul"/>
    <img src={img2} alt="burgut"/>
    <img src={img3} alt="qoplon"/>
    <img src={img4}/>
    <img src={img5}/>
    <img src={img6}/>

</SRLWrapper>
        </SimpleReactLightbox>
    );
};

export default SimpleLightbox;