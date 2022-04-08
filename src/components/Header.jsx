import {Button} from "./Button";
import "../styles/Header.css"

export const Header = ({state, setState}) => {
    return(
        <div className={'header'}>
            <Button name="좌표 설정" state={state.markerDraw} setState={setState.setMarkerDraw} />
            <Button name="좌표 연결" state={state.edgeDraw} setState={setState.setEdgeDraw} />
            <Button name="좌표 제거" state={state.markerDelete} setState={setState.setMarkerDelete} />
            <Button name="마커 보기" state={state.markerShow} setState={setState.setMarkerShow} />
        </div>
    )
}