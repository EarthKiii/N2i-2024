import { useState } from "react";
import CreditBlob from "../../Components/CreditBlob/CreditBlob";
import CreditList from "../../Components/CreditList/CreditList";
import './Credits.css'
import { Person } from "../../Constants";

const Credits = () => {
  const [currPerson, setCurrPerson] = useState(null as Person|null);
  return (
    <div className="credits">
      <CreditList setPerson={setCurrPerson}/>
      {currPerson ? (<CreditBlob person={currPerson} onHover={setCurrPerson} />) : <span style={{flex: 2}}></span>}
    </div>
  )
};

export default Credits;