import colors from "../../../styles/colors";
import Card from "./Card";
import cardsContent from "./cardsContent";

import { motion } from "framer-motion"
import { cards} from "./cardsAnimations";

export default function CardsWrapper() {
    
    return(
        <>
        <section className="cards_bg">
            <div className="container">
                {cardsContent.map( (card,i) => 
                <motion.span 
                    variants={cards(i)}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    key={card.title}>
                    
                    <Card title={card.title} description={card.description} image={card.image} hoverImage={card.image_hover} back={card.back} icon={card.icon}/>
                
                </motion.span>)}
            </div>
        </section>

        <style jsx>
        {`

        .cards_bg{
            margin-top: 40px;
            height: 528px;
            width:100%;
            background: ${colors.specials.section_bg};
            display: flex;
        }

        .cards_bg .container{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container span:nth-child(1){
            transform: rotate(-3deg) translate(100px);    
        }
        .container span:nth-child(1):hover{
            transform: rotate(-4deg) translate(100px);            
        }

        .container span:nth-child(2){
            transform: translateY(-40px);    
        }
        .container span:nth-child(2):hover{
            transform: translateY(-60px);              
        }

        .container span:nth-child(3){
            transform: rotate(3deg) translate(-100px);     
        }
        .container span:nth-child(3):hover{
            transform: rotate(4deg) translate(-100px);            
        }

        
        @media (max-width:1463px){
            
            .container span:nth-child(1){
                transform: translate(0);    
            }
            .container span:nth-child(1):hover{
                transform: translate(0);            
            }
            .container span:nth-child(2){
                transform: translate(0);          
            }
            .container span:nth-child(2):hover{
                transform: translate(0);              
            }

            .container span:nth-child(3){
                transform: translate(0);     
            }
            .container span:nth-child(3):hover{
                transform: translate(0);            
            }       
        }


                `}
        </style>
        </>
    )
}