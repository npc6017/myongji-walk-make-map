import {useCallback} from "react";

/** TODO 노드(마커) 추가 API 콜하기 */
export const useMapClick = (setMarkerList) => {
    return useCallback((map, mouse) => {
        setMarkerList((prevState =>
            [...prevState, { lat: mouse.latLng.Ma, lng: mouse.latLng.La }]))
    }, [setMarkerList]);
}