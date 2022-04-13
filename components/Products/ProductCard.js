import Image from 'next/image'
import { usePoints, useRedeem, useUser } from '../../hooks/hooks';
import colors from '../../styles/colors'

import { motion } from "framer-motion"
import { fadeProduct, image_hover} from "./productsAnimations";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function ProductCard({product}){

    
    const isMobile = useMediaQuery('(max-width:1023px)');

    const [points] = usePoints();
    const {isLoading} = useUser();
    const canBuy = product.cost <= points;
    const redeem = useRedeem();

    const handleRedeem = () => {
        if (canBuy){
            redeem(product)
        }
    }

    return (
        <>

        <motion.div initial="initial"
        animate="animate" variants={fadeProduct()}  whileHover="hover">
        <div className='product_card'>
            <div className="product_container">
                <div className="product_image">
                    <motion.div variants={image_hover} >
                    <Image src={isMobile ? product.img.url : product.img.hdUrl} width={348} height={344} objectFit="contain" objectPosition="center"/>
                    </motion.div>
                </div>
                <div className="product_text">
                    <h3>{product.name}</h3> 
                    <p>{product.category}</p> 
                </div>        
            </div>
            {
            isLoading ?
                (<div className='product_button processing'>Processing...</div>) :
                (
                    canBuy ? 
                    (<motion.div style={{width: "100%"}} whileHover={{ y: 2 }} whileTap={{ scale: 0.95 }}><div className='product_button redeem' onClick={handleRedeem}>Redeem for <Image src="/icons/aeropay-3.svg" width={24} height={24} /> {product.cost}</div></motion.div>) : 
                    (<div className='product_button disabled'>You need <Image src="/icons/aeropay-2.svg" width={24} height={24} /> {product.cost}</div>) 
                )
            }
        </div>
        </motion.div>
        
        <style jsx>
        {`
            .product_card{
                display:flex;
                flex-direction: column;
                align-items: center;
                gap:16px;
            }
            .product_container{
                border: 1px solid #DAE4F2;
                border-radius:16px;
                width: 100%;
                max-width: 348px;
            }    
            .product_image{
                padding: 34px;
                overflow:hidden;
                position:relative;
            }
            .product_text{
                border-top: 1px solid #DAE4F2;
                padding: 16px 24px 24px 24px;
            }
            .product_text h3{
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 150%;
                color: ${colors.neutrals.c900};
                margin: 0;
            }
            .product_text p{
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 150%;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                color: ${colors.neutrals.c600};       
                margin: 0;
            }

            .product_button{
                font-weight: 600;
                font-size: 18px;
                line-height: 150%;
                color: ${colors.neutrals.c600};
                box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
                border-radius: 16px;
                background: ${colors.neutrals.c200};
                width: 100%;
                text-align: center;
                padding: 16px;
                cursor:pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }

            .redeem{
                color: ${colors.neutrals.c0};
                background: ${colors.brand.default};
            }
            .redeem:hover{
                background: ${colors.brand.hover};
            }

            .processing{
                color: ${colors.neutrals.c0};
                background: ${colors.brand.default};
                pointer-events:none;
                opacity:.7;
            }

            .disabled{
                pointer-events:none;
            }


        `}
        </style>
        </>
        
    )
}