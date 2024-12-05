import { motion } from "framer-motion"

const CreditName = ({firstName, lastName}: {firstName: string, lastName: string}) => {
    return <div><p>{firstName}</p><motion.p>{lastName}</motion.p></div>
}