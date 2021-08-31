import { YMaps, Map, Placemark } from "react-yandex-maps";

const YandexMap = () => {
    return (
        <YMaps>
            <Map defaultState={{
                center:[39.858331, 64.447312],
                zoom:10
            }}>
                <Placemark geometry={[39.858331, 64.447312]}/>
            </Map>
        </YMaps>
        );
};

export default YandexMap;