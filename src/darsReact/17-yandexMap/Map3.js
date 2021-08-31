import { YMaps, Map, Placemark, FullscreenControl, GeolocationControl, TrafficControl, ZoomControl, TypeSelector } from "react-yandex-maps";

const YandexMap = () => {
    return (
        <YMaps>
            <Map defaultState={{ //xarita default parametrlari
                center:[39.858331, 64.447312],
                zoom:10
            }}>
                <Placemark geometry={[39.858331, 64.447312]}/> {/*nuqtaning koordinatasi(pozitsiyasi) */}
                <FullscreenControl options={{float:'left'}}/>
                <GeolocationControl options={{float:'right'}}/>
                <TrafficControl options={{float:'right'}}/>
                <ZoomControl options={{float:'left'}}/>
                <TypeSelector/>
            </Map>
        </YMaps>
        );
};

export default YandexMap;