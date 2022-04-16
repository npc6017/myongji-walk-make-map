import {useCallback} from "react";
import axios from "axios";

export const useMapClick = (setMarkerList) => {
    return useCallback((map, mouse) => {
        const marker = { lat: mouse.latLng.Ma.toFixed(13), lng: mouse.latLng.La.toFixed(13) };
        axios.post("/map/node", {
            latitude: mouse.latLng.Ma.toFixed(13), longitude: mouse.latLng.La.toFixed(13)
        }).then((res) => {
            marker.id = res.data; // 텍스트로 등록된 id가 응답으로 오기때문에 직접 추가
            console.log(marker);
            setMarkerList((prevState => [...prevState, marker]))
        }).catch((err) => {
            console.log(err.response.data);
        })
    }, [setMarkerList]);
}