import {useCallback} from "react";
import axios from "axios";

/** TODO 노드(마커) 추가 API 콜하기 - 테스트만 진행해보면 된다.*/
export const useMapClick = (setMarkerList) => {
    return useCallback((map, mouse) => {
        const marker = { lat: mouse.latLng.Ma, lng: mouse.latLng.La };
        axios.post("/map/node", {
            latitude: mouse.latLng.Ma, longitude: mouse.latLng.La
        }).then((res) => {
            marker.id = res.data; // 텍스트로 등록된 id가 응답으로 오기때문에 직접 추가
            console.log(marker);
            setMarkerList((prevState => [...prevState, marker]))
        }).catch((err) => {
            console.log(err.response.data);
        })
    }, [setMarkerList]);
}