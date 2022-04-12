import Image from 'next/image'
import colors from '../../../styles/colors'
import {useState} from 'react'
import { motion } from "framer-motion"
import { image_hover } from "./cardsAnimations";

export default function Card({title, description, image, hoverImage, back, icon}){
    const[hovered,setHovered] = useState(false);

    return(
        <>
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover">

    
            <div className="card_container" onMouseOver={() => setHovered(true)} onMouseOut={ () => setHovered(false)}>
                <div className='image_container'>
                <motion.div variants={image_hover} >
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
            </div>
            </motion.div>

            <style jsx>
            {`
                .image_back{
                    position: absolute;
                    top: 0;
                }
                .card_container{
                    width: 532px;
                    height: 676px;
                    background: #FFFFFF;
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
                }

                .icon_container{
                    width: 48px;
                    height: 48px;
                    background: #E5F0FF;
                    border-radius: 8px;
                    margin: 0px 16px;
                }

                h3{
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 900;
                    font-size: 32px;
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
                    width: 508px;
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
                    font-size: 18px;
                    line-height: 150%;
                    color: ${colors.neutrals.c600};
                    width: 372px;
                }
            `}
            </style>
        </>
    )
}