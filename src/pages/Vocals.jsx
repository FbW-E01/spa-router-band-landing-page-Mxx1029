import { motion } from "framer-motion";

export default function Vocals() {

    return (
        <motion.div className="d-flex pb-5" >
            <motion.img 
                animate={{ x: 20, rotate: 360, opacity: 0.5 }}
                transition={{ type: "spring" }}
                className="m-auto" 
                src="https://source.unsplash.com/random/250x300"
            />
        </motion.div>
        // <div className="d-flex pb-5">
            // <img 
            //     className="m-auto" 
            //     src="https://source.unsplash.com/random/250x300" 
            // />
        // </div>
    )
}