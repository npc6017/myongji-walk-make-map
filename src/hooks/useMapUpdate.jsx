import {useEffect} from "react";
import axios from "axios";

export const useMapUpdate = (buttonState, setEdgeList, setMarkerList, setButtonState) => {
    return useEffect(() => {
        if (buttonState.mapUpdate === true) {
            axios.get("/map").then((res) => {
                const fixedNode = res.data.nodeList.map((value) => {
                    return {id: value.nodeId , lat: value.node.latitude, lng: value.node.longitude}
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
                console.log(err);
            }).finally(() => {
                setButtonState.setMapUpdate(false);
            })
            // setEdgeList(EDGE_INITIALIZE);
            // setMarkerList(NODE_INITIALIZE);
        }
    }, [buttonState.mapUpdate, setButtonState, setEdgeList, setMarkerList]);
}