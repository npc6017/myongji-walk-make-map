import {Button} from "./Button";
import "../styles/Header.css"

export const Header = ({buttonState, setButtonState}) => {
    return(
        <div className={'header'}>
            <Button name="좌표 설정" state={buttonState.markerDraw} setState={setButtonState.setMarkerDraw} />
            <Button name="좌표 연결" state={buttonState.edgeDraw} setState={setButtonState.setEdgeDraw} />
            <Button name="좌표 제거" state={buttonState.markerDelete} setState={setButtonState.setMarkerDelete} />
            <Button name="마커 보기" state={buttonState.markerShow} setState={setButtonState.setMarkerShow} />
            <Button name="지도 업데이트" state={buttonState.mapUpdate} setState={setButtonState.setMapUpdate} />
        </div>
    )
}