import {MapMarker} from "react-kakao-maps-sdk";
import {useCallback} from "react";
import axios from "axios";

export const Marker = (
    {
        position, buttonState, setToDrawMarkerList,
        markerList, setMarkerList, edgeList, setEdgeList
    }) => {

    const markerDelete = useCallback((marker) => {
        const latLng = {lat: String(marker.getPosition().getLat().toFixed(13)), lng: String(marker.getPosition().getLng().toFixed(13))};
        markerList.forEach((value) => console.log(value))
        const findMarker = markerList.filter((value) => value.lat === latLng.lat && value.lng === latLng.lng);
        axios.delete(`/map/node/${findMarker[0].id}`)
            .then((res) => {
                console.log(`${findMarker[0].id} Delete ${res.data}`);
                setMarkerList(markerList.filter(value => value.lat !== latLng.lat && value.lng !== latLng.lng));
                setEdgeList(edgeList.map(value => value.filter((val => val.lat !== latLng.lat && val.lng !== latLng.lng))))
            })
            .catch((err) => {
                console.log(err);
            })
    }, [setMarkerList, markerList, setEdgeList, edgeList]);

    const edgeDraw = useCallback((marker) => {
        const latLng = {lat: marker.getPosition().getLat().toFixed(13), lng: marker.getPosition().getLng().toFixed(13)};
        const findMarker = markerList.filter((value) => value.lat === latLng.lat && value.lng === latLng.lng);
        setToDrawMarkerList(prevState => [...prevState, findMarker[0]]);
    }, [markerList, setToDrawMarkerList])
    return (
        <MapMarker
            position={position}
            onClick={buttonState.markerDelete ? markerDelete
                : buttonState.edgeDraw ? edgeDraw
                    : null}
        />
    )
}