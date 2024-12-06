import { Dispatch, SetStateAction } from 'react';
import CreditName from '../CreditName/CreditName';
import './CreditList.css'
import { Person } from '../../Constants';

const CreditList = ({setPerson}: {setPerson: Dispatch<SetStateAction<Person|null>>}) => {
    return (
        <div className="creditList" onMouseLeave={() => setPerson(null)}>
            <h1>Crédits</h1>
            <CreditName person={{
                firstName: "Emmanuel", 
                lastName: "Bouldoires", 
                quote: "Force et Honneur, manus dislexus", 
                github: "https://github.com/titusse", 
                linkedin: "https://www.linkedin.com/in/emmanuel-bouldoires-65574529a/"}}
             onHover={setPerson}/>
            <CreditName person={{
                firstName: "Ivan", 
                lastName: "Bortnik", 
                quote: "Jonas, plus jamais on fait du TypeScript", 
                github: "https://github.com/ivan-bortnik", 
                linkedin: "https://www.linkedin.com/in/ivan-bortnik-61a57829a/"}} 
             onHover={setPerson}/>
            <CreditName person={{
                firstName: "Alexis", 
                lastName: "Piekarz", 
                quote: "Il vaut mieux perdre une fois 7-0 que 7 fois 1-0", 
                github: "https://github.com/Alaixs", 
                linkedin: "https://www.linkedin.com/in/alexis-piekarz/"}} 
             onHover={setPerson}/>
            <CreditName person={{
                firstName: "Dorian", 
                lastName: "Duprat", 
                quote: "Quand y a trop de grilles-pain, c'est grillé !", 
                github: "https://github.com/dorian-dpt", 
                linkedin: "https://www.linkedin.com/in/dorian-duprat/"}} 
             onHover={setPerson}/>
            <CreditName person={{
                firstName: "Jonas", 
                lastName: "Charrier", 
                quote: "Il paraît que l'idée même de la loi de Murphy découle de ce projet", 
                github: "https://github.com/EarthKiii", 
                linkedin: "https://www.linkedin.com/in/jonas-charrier/"}}
             onHover={setPerson}/>
        </div>
    )
}

export default CreditList;