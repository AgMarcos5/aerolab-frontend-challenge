
import Image from "next/image";
import colors from "../../styles/colors";

import { motion, useViewportScroll, useTransform } from "framer-motion"
import { heroWrapper, hero, icons } from "../../styles/variants";

export default function HeaderHero() {
    
    const {scrollY, scrollYProgress} = useViewportScroll();

    //hero
    const scaleHero = useTransform(scrollYProgress, [0,0.5], [1,1.3]);
    const translateHero = useTransform(scrollYProgress,[0,0.5],[0,-125]);

    //icons
    const translateIcons = useTransform(scrollYProgress,[0,0.5],[0,150]);

    return (
        <>
            <div className="header_hero">
            
                <motion.div
                variants={hero}
                initial="initial"
                animate="animate"
                className="hero_img">
                
                    <motion.div className="hero_img_icons" variants={icons} style={{translateY: translateIcons}}>
                        <Image src="/illustrations/hero-desktop-2.png"  alt="hero" width={830} height={830}/>
                    </motion.div>
                    <motion.div style={{scale:scaleHero, translateY:translateHero}}>
                        <Image src="/illustrations/hero-desktop.png"  alt="hero" width={830} height={830}/>
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
                    height: auto;
                    margin-top: 40px;
                    margin-bottom: -220px;
                    display: inline-flex;
                    justify-content: center;
                    z-index: 0;
                    width: 580px;
                }

                .hero_img{    
                    position: relative;
                    z-index: 1;
                    top: 0;
                    width: 830px;
                    display: flex;    
                    align-items: flex-end;
                    overflow:hidden;
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
                    display: none;
                    align-items: flex-end;
                    justify-content: center;
                }

                
                @media(min-width:1464px){
                    .header_hero{
                        height: 795px;
                        width: 897px;
                        margin-bottom:0;
                        margin-top: 0;
                    }
                    .hero_bg{
                        display:flex;
                    }
                    .hero_img{
                        position:absolute;  
                        align-items: flex-start;
                    }
                }


            `}
            </style>
        </>
    )
}