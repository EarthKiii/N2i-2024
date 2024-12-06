import { motion } from 'framer-motion';
import { Person } from '../../Constants';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import blob4 from '../../assets/blob4.svg'
import './CreditBlob.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const CreditBlob = ({person, onHover}: {person: Person, onHover: Dispatch<SetStateAction<Person|null>>}) => {
    const [blobPos, setBlobPos] = useState({})
    useEffect(()=> {
        setInterval(() => {
            setBlobPos({marginLeft: Math.random()*20-10, marginTop: Math.random()*20-10})
        }, 1000)
    },[])
    return (
        <div className="creditBlob" onMouseEnter={() => onHover(person)} onMouseLeave={() => onHover(null)}>
            <motion.img src={blob4} className="blobBg" animate={blobPos} transition={{duration: 1, ease: "easeInOut"}}/>
            <div className="person">
                <h1>{person.firstName}</h1>
                <p style={{opacity: "60%"}}>"{person.quote}"</p>
                <br/>
                <div className="links">
                    <a href={person.github}><FontAwesomeIcon icon={faGithub} color="white" size="3x"/></a>
                    <a href={person.linkedin}><FontAwesomeIcon icon={faLinkedin} color="white" size="3x"/></a>
                </div>
            </div>
        </div>
    )
}

export default CreditBlob;