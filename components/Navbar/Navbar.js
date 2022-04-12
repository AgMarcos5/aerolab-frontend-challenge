
import { motion } from "framer-motion"
import { fadeIn } from "../../styles/variants";
import Image from "next/image";
import Balance from "./Balance";

export default function Navbar () {
    return (
        <>
            <motion.div 
             variants={fadeIn("down")}
            initial="initial"
            animate="animate">
            <nav
            >
                <div className="navbar container">
                <Image src="/icons/aerolab-logo-1.svg" alt="aerolab logo" width={126} height={48}/>
                <Balance/>
                </div>
            </nav>
            
            </motion.div>

            <style jsx>
            {`
                nav{
                    height:128px;
                    display: flex;
                    align-items: center;
                    width: 100%;
                }
                .navbar{
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                }                 
            `}
            </style>
        </>
    )
}