import {Map} from "react-kakao-maps-sdk";
import '../styles/KakaoMap.css'
import {kakaoMapStart, kakaoMapLevel, NODE_INITIALIZE, EDGE_INITIALIZE} from "../constants/KakaoMap";
import {useCallback, useEffect, useState} from "react";
import {Marker} from "./Marker";
import {Line} from "./Line";

export const KakaoMap = ({markerShow, buttonState}) => {

    const [markerList, setMarkerList] = useState(NODE_INITIALIZE);
    const [edgeList, setEdgeList] = useState(EDGE_INITIALIZE)
    const [toDrawMarkerList, setToDrawMarkerList] = useState([]);

    const mapClick = useCallback((map, mouse) => {
        setMarkerList((prevState =>
            [...prevState, { lat: mouse.latLng.Ma, lng: mouse.latLng.La }]))
    }, [markerList]);

    useEffect(() => {
        if(toDrawMarkerList.length === 2) {
            setEdgeList(prevState => [...prevState, toDrawMarkerList]);
            // /** + 마커 연설 상태 해제 시키는 코드 추가 필요*/
            setToDrawMarkerList([]);
        }
    }, [toDrawMarkerList])

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
                    setToDrawMarkerList={setToDrawMarkerList}
                    markerList={markerList}
                    setMarkerList={setMarkerList} />
            ) : null}
            <Line edgeList={edgeList}/>
        </Map>
    )
}