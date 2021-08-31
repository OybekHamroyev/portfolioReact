import React, {useState} from 'react';
import './modal.scss'; //style ni import qilamiz
import ModalVideo from 'react-modal-video';

const AppModalVideo = () => {
    const [isOpen, setIsOpen] = useState(false)
    //youtube o'rniga vimeo ham ishlatsa buladi
    return (
        <div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" 
            onClose={()=>setIsOpen(false)}/>
                <button className="btn-primary" onClick={()=>setIsOpen(true)} >VIEW DEMO</button>
        </div>
    );
};

export default AppModalVideo;