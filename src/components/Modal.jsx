import '../styles/Modal.css';
import {useCallback, useState} from "react";
import axios from "axios";
import {ModalWeight} from "./ModalWeight";

export const Modal = ({toDrawMarkerList, setToDrawMarkerList}) => {

    const [streetLamp, setStreetLamp] = useState(0); // 0 ~ 5
    const [lowHill, setLowHill] = useState(0); // 0 ~ 5
    const [lowRain, setLowRain] = useState(0) // 0 ~ 5
    const [lowStair, setLowStair] = useState(0); // 0 ~ 5

    /** TODO 엣지 추가 API CALL - 테스트만 진행해보면 된다. */
    const sendEdge = useCallback(() => {
        // axios.post("", {
        //     nodeList: toDrawMarkerList,
        //     streetLamp: streetLamp,
        //     lowHill: lowHill,
        //     lowRain: lowRain,
        //     lowStair: lowStair,
        // }).then(() => {
        //     setToDrawMarkerList([]);
        //     setStreetLamp(0);
        //     setLowHill(0);
        //     setLowStair(0);
        // }).catch((err) => {
        //     console.log(err.response.data);
        // })
        console.log({ // 요청 데이터 확인용, 나중에 삭제필요!
            nodeList: toDrawMarkerList,
            streetLamp: streetLamp,
            lowHill: lowHill,
            lowRain: lowRain,
            lowStair: lowStair,
        });
        setToDrawMarkerList([]);
        setStreetLamp(0);
        setLowHill(0);
        setLowStair(0);
    }, [toDrawMarkerList, streetLamp, lowHill, lowRain, lowStair, setToDrawMarkerList]);

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