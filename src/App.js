import {KakaoMap} from "./components/KakaoMap";
import {Header} from "./components/Header";
import {useState} from "react";
function App() {
    const [markerShow, setMarkerShow] = useState(true);
    const [markerDraw, setMarkerDraw] = useState(false);
    const [edgeDraw, setEdgeDraw] = useState(false);
    const [markerDelete, setMarkerDelete] = useState(false);
    const [mapUpdate, setMapUpdate] = useState(false);

    const buttonState = {markerShow: markerShow, markerDraw: markerDraw, edgeDraw: edgeDraw, markerDelete: markerDelete, mapUpdate};
    const setButtonState = {setMarkerShow: setMarkerShow, setMarkerDraw: setMarkerDraw, setEdgeDraw: setEdgeDraw, setMarkerDelete: setMarkerDelete, setMapUpdate}

  return (
    <div>
        <Header
            buttonState={buttonState}
            setButtonState={setButtonState} />
        <KakaoMap
            markerShow={markerShow}
            buttonState={buttonState}
            setButtonState={setButtonState}
        />
    </div>
  );
}

export default App;
