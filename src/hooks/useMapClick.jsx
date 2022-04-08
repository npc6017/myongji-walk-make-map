import {useCallback} from "react";
import axios from "axios";

/** TODO 노드(마커) 추가 API 콜하기 - 테스트만 진행해보면 된다.*/
export const useMapClick = (setMarkerList) => {
    return useCallback((map, mouse) => {
        const marker = { lat: mouse.latLng.Ma, lng: mouse.latLng.La };
        console.log({ node: marker }); // 요청 데이터 확인용, 나중에 삭제필요!
        // axios.post("", {
        //     node: marker
        // }).then(() => {
        //     setMarkerList((prevState => [...prevState, marker]))
        // }).catch((err) => {
        //     console.log(err.response.data);
        // })
        setMarkerList((prevState => [...prevState, marker]))
    }, [setMarkerList]);
}