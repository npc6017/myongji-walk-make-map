import {MapMarker} from "react-kakao-maps-sdk";
import {useCallback} from "react";

export const Marker = (
    {position, buttonState, setToDrawMarkerList,
        markerList, setMarkerList, edgeList, setEdgeList}) => {

    /** TODO 노드(마커) 삭제 API 콜하기 */
    const markerDelete = useCallback((marker) => {
        const latLng = { lat: marker.getPosition().getLat(), lng: marker.getPosition().getLng()};
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