import {useEffect} from "react";
import axios from "axios";
import {EDGE_INITIALIZE, NODE_INITIALIZE} from "../constants/KakaoMap";
/** TODO 지도 업데이트 API 콜하여 응답 데이터로 다시 그리기  - 테스트만 진행해보면 된다.*/
export const useMapUpdate = (buttonState, setEdgeList, setMarkerList,setButtonState) => {
    return useEffect(() => {
        if(buttonState.mapUpdate === true) {
            // axios.get("").then((res) => {
            //     setEdgeList(res.data.nodeList);
            //     setMarkerList(res.data.edgeList);
            // }).catch((err) => {
            //     console.log(err.response.data);
            // })
            setEdgeList(EDGE_INITIALIZE);
            setMarkerList(NODE_INITIALIZE);
            setButtonState.setMapUpdate(false);
        }
    }, [buttonState.mapUpdate, setButtonState, setEdgeList, setMarkerList]);
}