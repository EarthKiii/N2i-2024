import { motion } from 'framer-motion';
import { Person } from '../../Constants';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import blob4 from '../../assets/blob4.svg'
import './CreditBlob.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const CreditBlob = ({person}: {person: Person}) => {
    const [blobPos, setBlobPos] = useState({})
    useEffect(()=> {
        setInterval(() => {
            setBlobPos({marginLeft: Math.random()*20, marginTop: Math.random()*20})
        }, 1000)
    },[])
    return (
        <div className="creditBlob">
            <motion.img src={blob4} className="blobBg" animate={blobPos} transition={{duration: 1, ease: "easeInOut"}}/>
            <h1>{person.firstName}</h1>
            <p>{person.quote}</p>
            <div className="links">
                <a href={person.github}><FontAwesomeIcon icon={faGithub} color="white" /></a>
                <a href={person.linkedin}><FontAwesomeIcon icon={faLinkedin} color="white" /></a>
            </div>
        </div>
    )
}

export default CreditBlob;