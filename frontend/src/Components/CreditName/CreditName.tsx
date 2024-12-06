import { motion } from "framer-motion"
import './CreditName.css'
import { Dispatch, SetStateAction } from "react";
import { Person } from "../../Constants";

const nameVariants = {
    initial: {},
    hover: { scale: 1.4, transition: { staggerChildren: 0.1 } }
};

const letterVariants = {
    initial: { opacity: 0, display: "none" },
    hover: { opacity: 1, display: "block" } 
};

const CreditName = ({person, onHover}: {person: Person, onHover: Dispatch<SetStateAction<Person|null>>}) => {
    return (
        <motion.div 
            whileHover="hover"
            onHoverStart={() => onHover(person)}
            onHoverEnd={() => onHover(null)}
            initial="initial"
            className="creditName"
            variants={nameVariants}
        >
            <p>{person.firstName}</p>&nbsp;
            {
                person.lastName.split("").map((char, i) => (
                    <motion.span key={`${char}-${i}`} variants={letterVariants}>
                        {char}
                    </motion.span>
                ))
            }
        </motion.div>
    )
}

export default CreditName;