import { motion } from "framer-motion";

export default function Bass() {
    return (
        <motion.div className="d-flex pb-5">
            <motion.img
                animate={{ rotate: 180 }}
                transition={{ type: "inertia", velocity: 50 }}
                className="m-auto" 
                src="https://source.unsplash.com/random/200x300"
            />
        </motion.div>
    )
}