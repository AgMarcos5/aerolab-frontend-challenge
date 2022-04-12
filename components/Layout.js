import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

import {useState, useEffect} from 'react'
import colors from "../styles/colors";
import Image from 'next/image'
import Link from 'next/link'
import ToastComponent from "./Toast/Toast";

export default function Layout ({children}) {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

    return (
        <>
        <div className="layout">
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
            <ToastComponent/>
            {showButton && (
                <Link href="/">
                    <a>
                        <button className="back-to-top">
                    <div><Image  src='/icons/chevron-default.svg' width={25} height={25}/></div>
                    </button>
                    </a>
                </Link>
            )}
        </div>
        
        <style jsx>
            {`
                .layout{
                    display: flex;
                    flex-direction: column;
                    margin: 0 auto;
                }    

               
                .back-to-top {
                    cursor: pointer;
                    position: fixed;
                    right: 60px;
                    bottom: 40px;
                    width:45px;
                    height:45px;
                    border: none;
                    font-size: 18px;
                    font-family: inherit;
                    background-blend-mode: multiply;
                    color: ${colors.neutrals.c600};
                    border-radius: 100px;
                    background: #fff;
                    box-shadow: -1px 0px 5px #176FEB, 0px -1px 5px #FF80FF;
                    transition: box-shadow 0.5s;
                }
                .back-to-top:hover {
                    background: #fff;
                    box-shadow: -2px 2px 10px #176FEB,
                                2px -2px 10px #FF80FF;
                }
    
                .back-to-top:active {
                    transition: box-shadow .1s ease;
                    border-radius: 100px;
                    background: ${colors.brand.light_2};
                    box-shadow: inset -5px 5px 10px #176FEB,
                                inset 5px -5px 10px #FF80FF;
                }

                .back-to-top div{
                    transform: rotate(270deg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
            `}
        </style>
        </>
    )
}