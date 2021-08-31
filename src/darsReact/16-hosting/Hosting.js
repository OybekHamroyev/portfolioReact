import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./style.css"
const Hosting = () => {
    //1
    //PS D:\PROGRAMMING\JavaScript\lessons> npm run build
    //build papkani netlify.app saytiga yuklaymiz
    //domen nomini kiritib https://mycitylocation.netlify.app/ manzilga kiramiz, saytimizga kiradi


    //2
    //PS D:\PROGRAMMING\JavaScript\lessons> npm i -g vercel

    //cmd ga
    //PS D:\PROGRAMMING\JavaScript\lessons> vercel
    //github yoki email orqali kiradi
    // yana
    //D:\PROGRAMMING\JavaScript\lessons>vercel
    //? Set up and deploy "D:\PROGRAMMING\JavaScript\lessons"? [Y/n]
    //birma-bir sozlab vercelga yuklaymiz
    //https://mylocation-omega.vercel.app/ saytni ochamiz
    
    return (
        <div>
            <h1>Hosting qilish</h1>
            <h2>Assalomu aleykum. Saytimizga xush kelibsiz</h2>
            <YMaps className="map">
            <Map defaultState={{
                center:[39.858331, 64.447312],
                zoom:10
            }}>
                <Placemark geometry={[39.858331, 64.447312]}/>
            </Map>
        </YMaps>
        <h4>e-mail: aquarius280186@gmail.com</h4>
        </div>
    );
};


export default Hosting;