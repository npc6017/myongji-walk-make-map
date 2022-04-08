import '../styles/Modal.css';
import {useCallback, useState} from "react";
import {ModalWeight} from "./ModalWeight";

export const Modal = ({toDrawMarkerList, setToDrawMarkerList}) => {

    const [streetLamp, setStreetLamp] = useState(0); // 0 ~ 5
    const [lowHill, setLowHill] = useState(0); // 0 ~ 5
    const [lowRain, setLowRain] = useState(0) // 0 ~ 5
    const [lowStair, setLowStair] = useState(0); // 0 ~ 5

    // TODO 엣지 추가 API CALL
    const sendEdge = useCallback(() => {
        console.log(`streetLamp: ${streetLamp}, lowHill: ${lowHill}, lowRain: ${lowRain}, lowStair: ${lowStair}`);
        setToDrawMarkerList([]);
        setStreetLamp(0);
        setLowHill(0);
        setLowStair(0);
    }, [streetLamp, lowHill, lowRain, lowStair, setToDrawMarkerList]);

    return(
        <div className={`modal ${toDrawMarkerList.length === 2 ? "modal-open" : "modal-close"}`} >
            <h2 className="modal-header">가중치 설정</h2>
            <ModalWeight
                setState={{setStreetLamp: setStreetLamp, setLowHill: setLowHill, setLowRain: setLowRain, setLowStair: setLowStair}}
            />
            <button
                className={`${toDrawMarkerList.length === 2 ? "button-modal" : null}`}
                onClick={sendEdge}>
                요청하기
            </button>
        </div>
    );
}