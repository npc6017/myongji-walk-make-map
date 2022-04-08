import {Button} from "./Button";
import "../styles/Header.css"

export const Header = ({markerShow, setMarkerShow}) => {
    return(
        <div className={'header'}>
            <Button name="좌표 설정 시작" />
            <Button name="좌표 연결 시작" />
            <Button name="좌표 제거 시작" />
            <Button name="마커 Off" state={markerShow} setState={setMarkerShow} />
        </div>
    )
}