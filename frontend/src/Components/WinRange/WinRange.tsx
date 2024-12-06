import './WinRange.css'
import { useState } from 'react';

function isSet(number: number, letterNumber: number){
    if(number > 100)
    {
        return <label id={"value"+letterNumber}>Pas de valeur définie</label>
    }
    else
    {
        return <label id={"value"+letterNumber}>{number}</label>
    }
}

const WinRange = ({letterNumber, random}: {letterNumber: number, random: number}) => {
    const name = "letter" +letterNumber;
    const [sliderValue, setSliderValue] = useState("101");
    return (
        <div>
            <input type="range" id={name} name={name} min="1" max="26" onChange={(e) => setSliderValue(e.target.value)}/>
            {isSet(Number(sliderValue)+random, letterNumber)}
        </div>
    )
}

export default WinRange;