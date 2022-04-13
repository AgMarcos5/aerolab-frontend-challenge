import Image from 'next/image'
import colors from '../../../styles/colors'
import {useState} from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { image_hover } from "./cardsAnimations";

export default function Card({title, description, image, hoverImage, back, icon}){
    const[hovered,setHovered] = useState(false);
    
    const {scrollY, scrollYProgress} = useViewportScroll();
    const translateIcons = useTransform(scrollYProgress,[0,0.2],[50,0]);

    return(
        <>    
            <div className="card_container" onMouseOver={() => setHovered(true)} onMouseOut={ () => setHovered(false)}>
            <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover">
                <div className='image_container'>
                <motion.div variants={image_hover} style={{translateY: translateIcons}}>
                    {!hovered && <Image src={image} width={508} height={498}/>}
                    {hovered && <Image src={hoverImage || image} width={508} height={498}/>}
                </motion.div>
                {back && <div className='image_back'><Image src={back} width={508} height={498}/></div>}
                </div>
                <div className='card_text'>
                    <div className='card_title'>
                        <div className='icon_container'><Image src={icon} width={48} height={48}/></div> <h3>{title}</h3>
                    </div>
                    <p>{description}</p>
                </div>
                
            </motion.div>
            </div>

            <style jsx>
            {`

                .image_back{
                    position: absolute;
                }
                .card_container{
                    width: 323px;
                    height: 477px;
                    background: rgba(255,255,255,.7);
                    border: 1px solid #DAE4F2;
                    box-sizing: border-box;
                    box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
                    border-radius: 32px;
                    padding:12px;
                    transition:1s;
                }
                .image_container{
                    background: ${colors.specials.illustration_bg};
                    border: 1px solid #DAE4F2;
                    box-sizing: border-box;
                    border-radius: 24px 24px 0px 0px;
                    position: relative;
                    overflow: hidden;

                    height: 290px;
                    display: flex;
                    align-items: center;
                }

                .icon_container{
                    width: 26px;
                    height: 26px;
                    background: #E5F0FF;
                    border-radius: 8px;                    
                    margin: 0 16px 0 0;
                }

                h3{
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 900;
                    font-size: 24px;
                    line-height: 100%;
                    text-transform: uppercase;
                    background: ${colors.brand.default};
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                    flex: none;
                    order: 1;
                    flex-grow: 0;
                    margin: 0px 16px;
                }

                .card_text{
                    padding: 16px 24px 24px;
                    width: 100%;
                    height: 154px;
                    background: #FFFFFF;
                    border: 1px solid #DAE4F2;
                    box-sizing: border-box;
                    border-radius: 0px 0px 24px 24px;
                }

                .card_text .card_title{
                    display: flex;
                    align-items: center;
                }

                .card_text p{
                    font-weight: 600;
                    font-size: 16px;
                    width: auto;
                    line-height: 150%;
                    color: ${colors.neutrals.c600};
                    
                }

                
                @media(min-width:1464px){
                    .card_container{
                    width: 532px;
                    height: 676px;
                    background: #FFFFFF;
                    }
                    .image_container{
                        height:auto;
                    }
                    .image_back{    
                        top: 0;
                    }
                    h3{
                        font-size: 32px;
                    }
                    .icon_container{
                        width: 48px;
                        height: 48px;
                        margin: 0px 16px;
                    }
                    .card_text p{    
                        font-size: 18px;
                        width: 372px;
                    }
                }

            `}
            </style>
        </>
    )
}