import {MapMarker} from "react-kakao-maps-sdk";
import {useCallback, useState} from "react";

export const Marker = ({position, buttonState, setToDrawMarkerList, markerList, setMarkerList}) => {



    const markerDelete = useCallback((marker) => {
        const latLng = { lat: marker.getPosition().getLat(), lng: marker.getPosition().getLng()};
        setMarkerList(markerList.filter(value => value.lat !== latLng.lat && value.lng !== latLng.lng));
    }, [markerList])

    const edgeDraw = useCallback((marker) => {
        const latLng = { lat: marker.getPosition().getLat(), lng: marker.getPosition().getLng()};
        setToDrawMarkerList(prevState => [...prevState, latLng]);
    }, [])
    return (
        <MapMarker
            position={position}
            onClick={buttonState.markerDelete ? markerDelete
                : buttonState.edgeDraw ? edgeDraw
                : null }
        />
    )
}