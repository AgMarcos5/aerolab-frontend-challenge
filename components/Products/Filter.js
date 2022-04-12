import {useState, useRef, useEffect} from 'react'
import colors from '../../styles/colors';
import {motion } from "framer-motion"

export default function Filter({active, onChange, filterOptions}){

    const [show, setShow] = useState(false);
    const dropdown = useRef(null);

    const handleFilter = (option) => {
        setShow(!show);
        onChange(option);
    }

    useEffect(() => {
        if (!show) return;
        function handleClick(event) {
          if (dropdown.current && !dropdown.current.contains(event.target)) {
            setShow(false);
          }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [show]);
    

    return(
        <>

        <div className="filter_container">
            <div className='text'>Filter by:</div>
            <div  className="filter">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <div className="menu" onClick={() => setShow(!show)}>
                    <div>{active}</div>
                    <div className='arrow'>▼</div>
                </div>
                </motion.div>
                <div ref={dropdown} className={`filter_options ${show ? 'show' : ''}`}>
                {filterOptions.map(option => 
                    <div className="option" key={option} onClick={() => handleFilter(option)}>
                        {option} 
                    </div>
                )}
                </div>
            </div>
        </div>

        <style jsx>
            {`
            .filter_container{
                display: flex;
                gap: 20px;
                align-items: center;
                
                z-index:2;
            }

            .filter{
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                position: relative;
                cursor:pointer;
            }
            .menu{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;      
                width: 256px;
                padding: 16px 12px 16px 24px;
                background: #FFFFFF;
                border: 1px solid #DAE4F2;
                border-radius: 16px;
            }

            .arrow{
                color:#000;
                font-size:12px;
            }

            .filter_options{
                position: absolute;
                top: 80px;
                width: 100%;
                background: #FFFFFF;
                border: 1px solid #DAE4F2;
                border-radius: 8px;
                padding: 8px 0px;
                z-index:1;
                transition: 0.5s;
                opacity: 0;
                transform: translateY(-40px);
                pointer-events:none;
                
                z-index:-1;
                }
                .show{
                    display:block;
                    opacity:1;
                    transform: translateY(0px);
                    pointer-events: auto;
                }   

            .filter_options div{
                padding: 12px 24px;
            }

            .option:hover{
                background: ${colors.neutrals.c100};
            }

            @media(max-width:1400px){
                .text{
                    display:none;
                }
            }

            `}
        </style>

        </>
        
    )
}