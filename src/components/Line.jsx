import {Polyline} from "react-kakao-maps-sdk";

export const Line = ({edgeList}) => {
    return(
        <Polyline
            path={edgeList}
            strokeWeight={5} // 선의 두께 입니다
            strokeColor={"#FFAE00"} // 선의 색깔입니다
            strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle={"solid"} // 선의 스타일입니다
        />
    )
}