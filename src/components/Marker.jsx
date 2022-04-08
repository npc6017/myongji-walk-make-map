import {MapMarker} from "react-kakao-maps-sdk";
import {useCallback} from "react";
import axios from "axios";

export const Marker = (
    {position, buttonState, setToDrawMarkerList,
        markerList, setMarkerList, edgeList, setEdgeList}) => {

    /** TODO 노드(마커) 삭제 API 콜하기 - 테스트만 진행해보면 된다. */
    const markerDelete = useCallback((marker) => {
        const latLng = { lat: marker.getPosition().getLat(), lng: marker.getPosition().getLng()};
        // axios.post("", {
        //     node: latLng,
        // }).then(() => {
        //     setMarkerList(markerList.filter(value => value.lat !== latLng.lat && value.lng !== latLng.lng));
        //     setEdgeList(edgeList.map(value => value.filter((val => val.lat !== latLng.lat && val.lng !== latLng.lng))))
        // }).catch((err) => {
        //     console.log(err.response.data);
        // })
        setMarkerList(markerList.filter(value => value.lat !== latLng.lat && value.lng !== latLng.lng));
        setEdgeList(edgeList.map(value => value.filter((val => val.lat !== latLng.lat && val.lng !== latLng.lng))))
    }, [setMarkerList, markerList, setEdgeList, edgeList]);

    const edgeDraw = useCallback((marker) => {
        const latLng = { lat: marker.getPosition().getLat(), lng: marker.getPosition().getLng()};
        setToDrawMarkerList(prevState => [...prevState, latLng]);
    }, [setToDrawMarkerList])
    return (
        <MapMarker
            position={position}
            onClick={buttonState.markerDelete ? markerDelete
                : buttonState.edgeDraw ? edgeDraw
                : null }
        />
    )
}