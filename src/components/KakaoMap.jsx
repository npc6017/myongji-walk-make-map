import { Map } from "react-kakao-maps-sdk";
import '../styles/KakaoMap.css'
import {kakaoMapStart, kakaoMapLevel} from "../constants/KakaoMap";

export const KakaoMap = () => {
    return (
        <Map
            className={'kakao-map'}
            center={kakaoMapStart}
            level={kakaoMapLevel}>
        </Map>
    )
}