import CreditName from "../../Components/CreditName/CreditName";
import './Credits.css'

const Credits = () => {
  return (
    <div className="credits">
      <CreditName firstName="Emmanuel" lastName="Bouldoires"/>
      <CreditName firstName="Ivan" lastName="Bortnik"/>
      <CreditName firstName="Dorian" lastName="Duprat"/>
      <CreditName firstName="Alexis" lastName="Piekarz"/>
      <CreditName firstName="Jonas" lastName="Charrier"/>
    </div>
  )
};

export default Credits;