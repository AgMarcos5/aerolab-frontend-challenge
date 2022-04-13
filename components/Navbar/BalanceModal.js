import { useUser } from "../../hooks/hooks";
import colors from "../../styles/colors";
import {useState} from 'react'
import Image from 'next/image'
import {motion } from "framer-motion"

export default function BalanceModal({addPoints, showBalance}){
    const {user, isLoading} = useUser();
    const pointsOptions = [1000,5000,7500];
    const [pointActive, setPointActive] = useState(pointsOptions[0]);


    return (
        <>
            <div className={`balance_modal ${showBalance ? 'show' : ''}`}>
                <h3>Add Balance</h3>

                <div className="balance_content">
                    <div className="credit_card">
                        <div className="title">
                            <span>Aerocard</span>
                            <span> <Image src="/icons/aeropay-2.svg" alt="icon" width={24}  height={24} /></span>
                        </div>     
                        <div className="name">
                            <span>{!isLoading && user.name}</span>
                            <span>07/23</span>
                        </div>           
                    </div>

                    <div className="points_container">
                        {pointsOptions.map(option => 
                            <div key={option} className={`point_option ${option === pointActive ? 'active' : ''}`} onClick={() => setPointActive(option)}>
                                <span>{option}</span> 
                            </div>
                        )}
                    </div>
                    <motion.div whileTap={{ scale: 0.95 }}>
                    <div className={`button ${isLoading ? 'disabled': ''}`} onClick={() => addPoints(pointActive)}>
                        <Image src="/icons/aeropay-3.svg" alt="icon" width={24}  height={24} />
                        Add points
                    </div>
                    </motion.div>
                </div>


            </div>
            <style jsx>
            {`
                .balance_modal{
                    position:absolute;
                    margin-top: 8px;
                    right: 0;
                    
                    background: #FFFFFF;
                    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
                    border-radius: 16px;
                    border: 1px solid ${colors.neutrals.c300};
                    width:312px;
                    z-index:-1;

                    transition: 0.5s;
                    opacity: 0;
                    transform: translateY(-40px);
                    pointer-events:none;
                }
                .show{
                    display:block;
                    opacity:1;
                    transform: translateY(0px);
                    pointer-events: auto;
                }    

                h3{
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 150%;
                    color: ${colors.neutrals.c900};
                    border-bottom: 1px solid ${colors.neutrals.c300};
                    padding-left: 24px;
                    padding-bottom: 8px;
                }

                .balance_content{
                    padding:0 24px 24px 24px;
                }

                .credit_card{
                    width: 100%;
                    height: 148px;
                    margin-top: 24px;
                    border-radius: 8px;
                    padding: 16px;
                    color: ${colors.neutrals.c100};
                    font-weight:600;
                    background-color: ${colors.neutrals.c900};
                    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
                    background-image: url('/illustrations/wave-pattern.svg');
                    background-size: cover;
                    background-position: bottom;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .name, .title{
                    display: flex;
                    justify-content: space-between;
                }
                .name{
                    font-size: 14px;
                }
                .title{
                    font-size: 18px;
                }


            .points_container{
                display: flex;
                gap: 4px;
                margin-top:40px;
                align-items: center;
                justify-content: center;
            }

            .point_option{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 4px 19px;
                height: 43px;
                background: #E6F0FF;
                border-radius: 12px;
                cursor:pointer;
                width: 100%;
            }

            .point_option span{
                font-weight:600;
                background: ${colors.brand.default};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }

            .active{
                background: ${colors.brand.default};
            }
            .active:hover{
                background: ${colors.brand.hover};
            }
            .active span{
                color: ${colors.neutrals.c100};
                -webkit-text-fill-color: unset;
                text-fill-color: unset;
            }

            .button{
                    padding: 12px 40px;
                    background: ${colors.brand.default};
                    color:white;
                    text-align:center;
                    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
                    margin-top:24px;
                    border-radius: 16px;
                    font-weight: 600;
                    font-size: 18px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    cursor:pointer;
                    line-height: 27px;
                    justify-content: center;
                }
            .button:hover{
                    background: ${colors.brand.hover};
            }
            .button.disabled{
                pointer-events: none;
                opacity:.7;
            }

                
            `}
            </style>
        </>
    )
}