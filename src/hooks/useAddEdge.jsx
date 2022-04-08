import {useEffect} from "react";

export const useAddEdge = (toDrawMarkerList, setEdgeList, setToDrawMarkerList) => {
    return useEffect(() => {
        /** TODO 엣지 추가 API 콜하기 */
        if(toDrawMarkerList.length === 2 &&
            toDrawMarkerList[0].lat !== toDrawMarkerList[1].lat && toDrawMarkerList[0].lng !== toDrawMarkerList[1].lng) { // 같은 마커 두개는 안된다.
            setEdgeList(prevState => [...prevState, toDrawMarkerList]);
            /** todo +마커 연설 상태 해제 시키는 코드 추가 필요
             * 모달 진행하면서 하기
             * */
            setToDrawMarkerList([]);
        }
    }, [setEdgeList, setToDrawMarkerList, toDrawMarkerList])
}