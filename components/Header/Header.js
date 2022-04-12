import colors from "../../styles/colors";
import CardsWrapper from "./Cards/CardsWrapper";
import HeaderHero from "./HeaderHero";
import Image from 'next/image'

import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../../styles/variants";
import Link from 'next/link'

export default function Header() {
    return(
        <>
            <section className="header">
                <div className="container">
                    <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate">
                    <div className="header_text">
                        <motion.div variants={fadeIn()}>
                            <p>EXPLORE THE</p>
                            <h1><span>TECH</span><span>ZONE</span></h1>
                            <span className="subtitle">Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.</span>
                        </motion.div>
                        
                        <motion.div variants={fadeIn()} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link href="#products"><a>
                                <div className="button">
                                    view all products 
                                    <Image src="/icons/Icons.svg" alt="icon" width={32}  height={32} />
                                </div>
                            </a></Link>
                        </motion.div>
                    </div>
                    </motion.div>
                    <HeaderHero/>
                </div>
                <CardsWrapper/>
            </section>

            <style jsx> 
            {`
                .container{                
                display: flex;
                align-items: flex-start;
                gap: 140px;
                }


                .header{
                    background-image:url('/illustrations/single-wave-pattern.svg');
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    -webkit-box-align: center;
                    align-items: center;
                    margin-top: 112px;
                    margin-bottom:145px;
                }

                .header_text{
                    max-width: 600px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                    height: 600px;
                }

                p{
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 150%;
                    letter-spacing: 0.24em;
                    text-transform: uppercase;
                    color: ${colors.neutrals.c600};
                }

                h1{
                    font-weight: 900;
                    font-size: 200px;
                    line-height: 80%;
                    text-transform: uppercase;
                    display: flex;
                    flex-direction: column;
                    margin: 10px 0;
                }

                h1 span:nth-child(1){
                    background: ${colors.brand.default};
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }

                h1 span:nth-child(2){
                    color: ${colors.neutrals.c900}
                }

                .subtitle{
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 150%;
                    color: ${colors.neutrals.c600};
                }

                .button{
                    padding: 26px 40px;
                    background: ${colors.brand.default};
                    color:white;
                    text-align:center;
                    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
                    border-radius: 24px;
                    font-weight: 600;
                    font-size: 18px;
                    width: max-content;
                    text-transform:uppercase;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    cursor:pointer;
                }
                .button:hover{
                    background: ${colors.brand.hover};
                }

            `}
            </style>

        </>
    )
}