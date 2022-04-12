
import Image from "next/image";
import colors from "../../styles/colors";

import { motion } from "framer-motion"
import { heroWrapper, hero, icons } from "../../styles/variants";

export default function HeaderHero() {
    return (
        <>
            <div className="header_hero">
            
                <motion.div
                variants={hero}
                initial="initial"
                animate="animate"
                className="hero_img">
                    <Image src="/illustrations/hero-desktop.png"  alt="hero" width={830} height={830}/>
                    <motion.div className="hero_img_icons" variants={icons} >
                        <Image src="/illustrations/hero-desktop-2.png"  alt="hero" width={830} height={830}/>
                    </motion.div>
                    
                </motion.div>

                <motion.div
                variants={heroWrapper}
                initial="initial"
                animate="animate"
                className="hero_bg">
                </motion.div>
           
            </div>

            <style>
            {`
                .header_hero{    
                    width: 897px;
                    height: 795px;
                    display: inline-flex;
                    justify-content: center;
                }

                .hero_img{    
                    position: absolute;
                    z-index: 1;
                    top: 0;
                    height: 600px;
                    display: flex;
                    align-items: flex-start;
                }
                .hero_img_icons{
                    position:absolute;
                }
                .hero_bg{
                    width: 600px;
                    height: 600px;
                    background: ${colors.specials.section_bg};
                    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
                    border-radius:300px;
                    margin: 0 auto;
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                }


            `}
            </style>
        </>
    )
}