import {useEffect} from "react";
import {EDGE_INITIALIZE, NODE_INITIALIZE} from "../constants/KakaoMap";
/** TODO 지도 업데이트 API 콜하여 응답 데이터로 다시 그리기 */
export const useMapUpdate = (buttonState, setEdgeList, setMarkerList,setButtonState) => {
    return useEffect(() => {
        if(buttonState.mapUpdate === true) {
            setEdgeList(EDGE_INITIALIZE);
            setMarkerList(NODE_INITIALIZE);
            setButtonState.setMapUpdate(false);
        }
    }, [buttonState.mapUpdate, setButtonState, setEdgeList, setMarkerList])
}