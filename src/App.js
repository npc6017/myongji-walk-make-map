import './App.css';
import {KakaoMap} from "./components/KakaoMap";
import {Header} from "./components/Header";
import {useState} from "react";
function App() {
    const [markerShow, setMarkerShow] = useState(true);
    const [markerDraw, setMarkerDraw] = useState(false);
    const [edgeDraw, setEdgeDraw] = useState(false);
    const [markerDelete, setMarkerDelete] = useState(false);


  return (
    <div>
        <Header
            state={{markerShow: markerShow, markerDraw: markerDraw, edgeDraw: edgeDraw, markerDelete: markerDelete}}
            setState={{setMarkerShow: setMarkerShow, setMarkerDraw: setMarkerDraw, setEdgeDraw: setEdgeDraw, setMarkerDelete: setMarkerDelete}} />
        <KakaoMap
            markerShow={markerShow}
            buttonState={{markerShow: markerShow, markerDraw: markerDraw, edgeDraw: edgeDraw, markerDelete: markerDelete}}/>
    </div>
  );
}

export default App;
