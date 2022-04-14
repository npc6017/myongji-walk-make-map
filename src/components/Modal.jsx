import '../styles/Modal.css';
import {useCallback, useState} from "react";
import axios from "axios";
import {ModalWeight} from "./ModalWeight";

export const Modal = ({toDrawMarkerList, setToDrawMarkerList, setEdgeList}) => {

    const [streetLamp, setStreetLamp] = useState(0); // 0 ~ 5
    const [lowHill, setLowHill] = useState(0); // 0 ~ 5
    const [lowRain, setLowRain] = useState(0) // 0 ~ 5
    const [lowStair, setLowStair] = useState(0); // 0 ~ 5

    /** TODO 엣지 추가 API CALL - 테스트만 진행해보면 된다. */
    const sendEdge = useCallback(() => {
        console.log(toDrawMarkerList[0]);
        console.log(toDrawMarkerList[1]);
        const req = {
            edgeWeightDtoList: [
                {
                    weightCode: "LOW_HILL",
                    weightValue: lowHill
                }, {
                    weightCode: "STREET_LAMP",
                    weightValue: streetLamp
                }, {
                    weightCode: "LOW_RAIN",
                    weightValue: lowRain
                }, {
                    weightCode: "LOW_STAIR",
                    weightValue: lowStair
                }
            ],
            endNode: toDrawMarkerList[1].id,
            startNode: toDrawMarkerList[0].id
        };
        axios.post("/map/edge", req)
            .then((res) => {
                console.log(toDrawMarkerList[1].lat)
                const edge = [
                    {lat: toDrawMarkerList[0].lat, lng: toDrawMarkerList[0].lng},
                    {lat: toDrawMarkerList[1].lat, lng: toDrawMarkerList[1].lng}
                ]
                setEdgeList(prevState => [...prevState, edge]);
            }).catch((err) => {
            console.log(err.response);
        }).finally(() => {
            setToDrawMarkerList([]);
        })
    }, [toDrawMarkerList, streetLamp, lowHill, lowRain, lowStair, setToDrawMarkerList,setEdgeList]);

    return (
        <div className={`modal ${toDrawMarkerList.length === 2 ? "modal-open" : "modal-close"}`}>
            <h2 className="modal-header">가중치 설정</h2>
            <ModalWeight
                setState={{
                    setStreetLamp: setStreetLamp,
                    setLowHill: setLowHill,
                    setLowRain: setLowRain,
                    setLowStair: setLowStair
                }}
            />
            <button
                className={`${toDrawMarkerList.length === 2 ? "button-modal" : null}`}
                onClick={sendEdge}>
                요청하기
            </button>
        </div>
    );
}