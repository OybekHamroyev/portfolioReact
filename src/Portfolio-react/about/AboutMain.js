import {useState, useEffect} from 'react';
import db from '../firebase/config'
const AboutMain = () => {
    const [aboutInfos, setaboutInfos] = useState([])
    useEffect(() => {
        db.collection("about").onSnapshot(snapshot=>setaboutInfos(snapshot.docs.map(doc=>doc.data())))
    }, []);
    return (
        <div className="infoAbout">
           {aboutInfos.map(about=>(
           <div>
                <img src={about.image}/>
                <span>
                    <p className="aboutText">{about.textOne}
                        <div>
                            <b>{about.textTwo}</b>
                        </div>
                        {about.textThree}
                    </p>
                </span>
            </div>)
            )}
        </div>
    );
};

 
export default AboutMain;