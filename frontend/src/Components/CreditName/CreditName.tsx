import { motion } from "framer-motion"
import './CreditName.css'

const nameVariants = {
    initial: {},
    hover: { scale: 1.4, transition: { staggerChildren: 0.1 } }
};

const letterVariants = {
    initial: { opacity: 0, display: "none" },
    hover: { opacity: 1, display: "block" } 
};

const CreditName = ({firstName, lastName}: {firstName: string, lastName: string}) => {
    return (
        <motion.div 
            whileHover="hover"
            initial="initial"
            className="creditName"
            variants={nameVariants}
        >
            <p>{firstName}</p>&nbsp;
            {
                lastName.split("").map((char, i) => (
                    <motion.span key={`${char}-${i}`} variants={letterVariants}>
                        {char}
                    </motion.span>
                ))
            }
        </motion.div>
    )
}

export default CreditName;