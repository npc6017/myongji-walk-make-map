import {useCallback} from "react";

export const ModalWeight = ({setState}) => {

    const onCheck = useCallback((e) => {
        switch (e.target.name) {
            case "streetLamp":
                setState.setStreetLamp(e.target.id.charAt(e.target.id.length -1));
                break;
            case "lowHill":
                setState.setLowHill(e.target.id.charAt(e.target.id.length -1));
                break;
            case "lowRain":
                setState.setLowRain(e.target.id.charAt(e.target.id.length -1));
                break;
            default:
                setState.setLowStair(e.target.id.charAt(e.target.id.length -1));
                break;
                
        }
    }, [setState])

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>가중치 종류</th>
                    <th>0</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>가로등</td>
                    <td><input onChange={onCheck} type="radio" id="streetLamp0" name="streetLamp"/></td>
                    <td><input onChange={onCheck} type="radio" id="streetLamp1" name="streetLamp"/></td>
                    <td><input onChange={onCheck} type="radio" id="streetLamp2" name="streetLamp"/></td>
                    <td><input onChange={onCheck} type="radio" id="streetLamp3" name="streetLamp"/></td>
                    <td><input onChange={onCheck} type="radio" id="streetLamp4" name="streetLamp"/></td>
                    <td><input onChange={onCheck} type="radio" id="streetLamp5" name="streetLamp"/></td>
                </tr>
                <tr>
                    <td>경사도</td>
                    <td><input onChange={onCheck} type="radio" id="lowHill0" name="lowHill"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowHill1" name="lowHill"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowHill2" name="lowHill"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowHill3" name="lowHill"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowHill4" name="lowHill"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowHill5" name="lowHill"/></td>
                </tr>
                <tr>
                    <td>비 피하기</td>
                    <td><input onChange={onCheck} type="radio" id="lowRain0" name="lowRain"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowRain1" name="lowRain"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowRain2" name="lowRain"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowRain3" name="lowRain"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowRain4" name="lowRain"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowRain5" name="lowRain"/></td>
                </tr>
                <tr>
                    <td>계단</td>
                    <td><input onChange={onCheck} type="radio" id="lowStair0" name="lowStair"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowStair1" name="lowStair"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowStair2" name="lowStair"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowStair3" name="lowStair"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowStair4" name="lowStair"/></td>
                    <td><input onChange={onCheck} type="radio" id="lowStair5" name="lowStair"/></td>
                </tr>
            </tbody>
        </table>
    )
}