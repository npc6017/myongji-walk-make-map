import {Map, MapMarker} from "react-kakao-maps-sdk";
import '../styles/KakaoMap.css'
import {kakaoMapStart, kakaoMapLevel, NODE_INITIALIZE} from "../constants/KakaoMap";
import {useState} from "react";

export const KakaoMap = ({markerShow}) => {

    const [markerList, setMarkerList] = useState(NODE_INITIALIZE);

    return (
        <Map
            className={'kakao-map'}
            center={kakaoMapStart}
            level={kakaoMapLevel}>
            { markerShow ? markerList.map((value, key) =>
                <MapMarker position={value} key={key} />
            ) : null}
        </Map>
    )
}