import { motion } from "framer-motion"

const CreditName = ({firstName, lastName}: {firstName: string, lastName: string}) => {
    return (
        <motion.div whileHover={{ scale: 1.4 }}>
            <p>{firstName}</p>
            <motion.p>{lastName}</motion.p>
        </motion.div>
    )
}

export default CreditName;