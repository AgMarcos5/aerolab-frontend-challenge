
import { motion } from "framer-motion"
import { fadeIn } from "../../styles/variants";
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
                <div className="aerolab_logo"></div>
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

                .aerolab_logo{
                    width:126px;
                    height:48px;
                    background-image:url("/icons/aerolab-logo-1.svg");
                    background-repeat:no-repeat;
                }          

                @media(max-width:699px){
                    .aerolab_logo{
                        background-image:url("/icons/aerolab-logo-2.svg")
                    }
                }  
            `}
            </style>
        </>
    )
}