import './App.css';
import {KakaoMap} from "./components/KakaoMap";
import {Header} from "./components/Header";
import {useState} from "react";
function App() {
    const [markerShow, setMarkerShow] = useState(false);

  return (
    <div>
        <Header markerShow={markerShow} setMarkerShow={setMarkerShow} />
        <KakaoMap markerShow={markerShow}/>
    </div>
  );
}

export default App;
