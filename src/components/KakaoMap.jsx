import {Map} from "react-kakao-maps-sdk";
import '../styles/KakaoMap.css'
import {kakaoMapStart, kakaoMapLevel} from "../constants/KakaoMap";
import {useState} from "react";
import {Marker} from "./Marker";
import {Line} from "./Line";
import {useMapClick} from "../hooks/useMapClick";
import {useMapUpdate} from "../hooks/useMapUpdate";
import {useAddEdge} from "../hooks/useAddEdge";
import {Modal} from "./Modal";

export const KakaoMap = ({markerShow, buttonState, setButtonState}) => {

    const [markerList, setMarkerList] = useState([]);
    const [edgeList, setEdgeList] = useState([])
    const [toDrawMarkerList, setToDrawMarkerList] = useState([]);

    const mapClick = useMapClick(setMarkerList);
    useMapUpdate(buttonState, setEdgeList, setMarkerList, setButtonState);
    useAddEdge(toDrawMarkerList, setEdgeList);

    return (
        <Map
            className={`kakao-map ${toDrawMarkerList.length === 2 ? 'kakao-map-modal-open' : null}`}
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
                    setMarkerList={setMarkerList}
                    edgeList={edgeList}
                    setEdgeList={setEdgeList}
                />
            ) : null}
            <Line edgeList={edgeList}/>
            <Modal
                toDrawMarkerList={toDrawMarkerList}
                setToDrawMarkerList={setToDrawMarkerList}
                setEdgeList={setEdgeList}
            />
        </Map>
    )
}