import { motion } from "framer-motion";

export default function Violin() {
    return (
        <motion.div className="d-flex pb-5">
            <motion.img
                animate={{ scale: [0, 1, 0.5, 1] }}
                transition={{ times: [0, 0.1, 0.9, 1] }}
                className="m-auto" 
                src="https://source.unsplash.com/random/200x350"
            />
            
        </motion.div>
    )
}