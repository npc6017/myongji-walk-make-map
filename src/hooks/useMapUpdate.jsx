import {useEffect} from "react";
import axios from "axios";
import {EDGE_INITIALIZE, NODE_INITIALIZE} from "../constants/KakaoMap";

/** TODO 지도 업데이트 API 콜하여 응답 데이터로 다시 그리기  - 테스트만 진행해보면 된다.*/
export const useMapUpdate = (buttonState, setEdgeList, setMarkerList, setButtonState) => {
    return useEffect(() => {
        if (buttonState.mapUpdate === true) {
            axios.get("/map").then((res) => {
                const fixedNode = res.data.nodeList.map((value) => {
                    return {lat: value.node.latitude, lng: value.node.longitude}
                });
                const fixedEdge = res.data.edgeList.map((value) => {
                    return [{
                        lat: value.startNode.node.latitude,
                        lng: value.startNode.node.longitude
                    }, {lat: value.endNode.node.latitude, lng: value.endNode.node.longitude}]
                });
                setEdgeList(fixedEdge);
                setMarkerList(fixedNode);
            }).catch((err) => {
                console.log(err.response.data);
            }).finally(() => {
                setButtonState.setMapUpdate(false);
            })
            // setEdgeList(EDGE_INITIALIZE);
            // setMarkerList(NODE_INITIALIZE);
        }
    }, [buttonState.mapUpdate, setButtonState, setEdgeList, setMarkerList]);
}