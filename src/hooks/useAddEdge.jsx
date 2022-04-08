import {useEffect} from "react";

export const useAddEdge = (toDrawMarkerList, setEdgeList) => {
    return useEffect(() => {
        if(toDrawMarkerList.length === 2 &&
            toDrawMarkerList[0].lat !== toDrawMarkerList[1].lat && toDrawMarkerList[0].lng !== toDrawMarkerList[1].lng) { // 같은 마커 두개는 안된다.
            setEdgeList(prevState => [...prevState, toDrawMarkerList]);
        }
    }, [setEdgeList, toDrawMarkerList])
}