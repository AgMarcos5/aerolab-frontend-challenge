import { context } from "../../context/context"
import { useContext, useState} from 'react'
import BalanceModal from "./BalanceModal";
import Image from 'next/image'
import colors from "../../styles/colors";
import { usePoints, useUser } from "../../hooks/hooks";

import {motion } from "framer-motion"

export default function Balance() {
    const [points,addPoints] = usePoints();
    const {isLoading} = useUser();
    const [showBalance, setShowBalance] = useState(false);

    const handleShowBalance = () => {
        if(!isLoading)
            setShowBalance(!showBalance);
    }

    return(
        <>
            <div className="balance_fixed">
                <div className="balance_container">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <div className="balance" onClick={handleShowBalance}>
                            <div className="balance_points">
                                <div className="icon"><Image src="/icons/aeropay-1.svg" width={32} height={32} /></div>
                                
                                <span>{isLoading ? (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>): points}</span>
                            </div>
                            <span  className={`arrow ${showBalance ? 'open' : ''}`}>
                                <Image src="/icons/chevron-active.svg" width={24} height={24} />
                            </span>
                        </div>
                        </motion.div>
                        <BalanceModal addPoints={addPoints} showBalance={showBalance} setShowBalance={setShowBalance}/>
                </div>
            </div>
            

            <style jsx>
            {`
                .balance_fixed{
                    position: fixed;
                    max-width: 1464px;  
                    height: 0;
                    width: 95%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: flex-end;
                    z-index:2;
                }
                .balance_container{
                    position:relative;
                    right: 10px;
                }
                .balance{
                    cursor:pointer;
                    background: #FFFFFF;
                    border: 1px solid #DAE4F2;
                    box-sizing: border-box;
                    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
                    border-radius: 16px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 16px;
                    width: 172px;
                    gap: 20px;
                }
                .balance_points{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 8px;
                }
                .balance_points .icon{
                    width:32px;
                }

                .balance span{
                font-weight:600;
                font-size: 18px;
                background: ${colors.brand.default};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                }

                .arrow{
                    width: 30px;
                    position: absolute;
                    right: 10px;
                    text-align: center;
                    transform: rotate(90deg);
                    transition:0.5s;
                    transform-origin: 50% 45%;
                }
                .arrow.open{
                    transform: rotate(270deg);
                }


                .lds-ellipsis {
                    display: flex;
                    position: relative;
                    height: 10px;
                    align-items: center;
                    left: -5px;
                }
                .lds-ellipsis div {
                position: absolute;
                top: 0;
                width: 13px;
                height: 13px;
                border-radius: 50%;
                background: ${colors.brand.light_2};
                animation-timing-function: cubic-bezier(0, 1, 1, 0);
                }
                .lds-ellipsis div:nth-child(1) {
                left: 8px;
                animation: lds-ellipsis1 0.6s infinite;
                }
                .lds-ellipsis div:nth-child(2) {
                left: 8px;
                animation: lds-ellipsis2 0.6s infinite;
                }
                .lds-ellipsis div:nth-child(3) {
                left: 32px;
                animation: lds-ellipsis2 0.6s infinite;
                }
                .lds-ellipsis div:nth-child(4) {
                left: 56px;
                animation: lds-ellipsis3 0.6s infinite;
                }
                @keyframes lds-ellipsis1 {
                0% {
                    transform: scale(0);
                }
                100% {
                    transform: scale(1);
                }
                }
                @keyframes lds-ellipsis3 {
                0% {
                    transform: scale(1);
                }
                100% {
                    transform: scale(0);
                }
                }
                @keyframes lds-ellipsis2 {
                0% {
                    transform: translate(0, 0);
                }
                100% {
                    transform: translate(24px, 0);
                }
                }
                
            `}
            </style>
        </>
    )
}