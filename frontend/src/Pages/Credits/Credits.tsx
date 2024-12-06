import { useState } from "react";
import CreditBlob from "../../Components/CreditBlob/CreditBlob";
import CreditList from "../../Components/CreditList/CreditList";
import './Credits.css'
import { Person } from "../../Constants";

const Credits = () => {
  const [currPerson, setCurrPerson] = useState({} as Person|null);
  return (
    <div className="credits">
      <CreditList setPerson={setCurrPerson}/>
      {currPerson != null ?<div className="personBlob"> <CreditBlob person={currPerson} /> </div>: null}
    </div>
  )
};

export default Credits;