import {Map, MapMarker} from "react-kakao-maps-sdk";
import '../styles/KakaoMap.css'
import {kakaoMapStart, kakaoMapLevel, NODE_INITIALIZE} from "../constants/KakaoMap";
import {useCallback, useState} from "react";
import {Marker} from "./Marker";

export const KakaoMap = ({markerShow, buttonState}) => {

    const [markerList, setMarkerList] = useState(NODE_INITIALIZE);

    const mapClick = useCallback((map, mouse) => {
        setMarkerList((prevState =>
            [...prevState, { lat: mouse.latLng.Ma, lng: mouse.latLng.La }]))
    }, [markerList]);

    return (
        <Map
            className={'kakao-map'}
            center={kakaoMapStart}
            level={kakaoMapLevel}
            onClick={buttonState.markerDraw ? mapClick : null}
        >
            { markerShow ? markerList.map((value, key) =>
                <Marker
                    position={value}
                    key={key}
                    buttonState={buttonState}
                    markerList={markerList}
                    setMarkerList={setMarkerList} />
            ) : null}
        </Map>
    )
}