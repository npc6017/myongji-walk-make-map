import {MapMarker} from "react-kakao-maps-sdk";
import {useCallback} from "react";

export const Marker = ({position, buttonState, markerList, setMarkerList}) => {

    const markerDelete = useCallback((marker) => {
        const latLng = { lat: marker.getPosition().getLat(), lng: marker.getPosition().getLng()};
        setMarkerList(markerList.filter(value => value.lat !== latLng.lat && value.lng !== latLng.lng));
    }, [markerList])

    return (
        <MapMarker
            position={position}
            onClick={buttonState.markerDelete ? markerDelete : null}
        />
    )
}