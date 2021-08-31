import { YMaps, Map, Placemark, GeoObject } from "react-yandex-maps";

const YandexMap2 = () => {
    return (
        <YMaps>
            <Map defaultState={{
                center:[39.767945, 64.421701],
                zoom:10
            }}>
                <GeoObject geometry={{ //obyektni ajratish(tugri chiziq bilan)
                    type:"LineString",
                    coordinates:[[39.858331, 64.447312], //boshl va oxirgi koordinata
                                [39.767945, 64.421701]]
                }}
                options={{ //obyekt(xaritadagi to'g'ri chiziq) parametrlari
                    geodesic:true,
                    strokeWidth:3,
                    StrokeColor:'#000000'
                }}
                />
            </Map>
        </YMaps>
        );
};

export default YandexMap2;