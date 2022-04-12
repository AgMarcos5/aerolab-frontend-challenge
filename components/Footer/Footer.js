import Link from 'next/link'
import colors from '../../styles/colors'

export default function Footer () {
    return (
        <>
            <footer>
            <Link href="https://github.com/AgMarcos5" >
                <a target="_blank">
                    <div className='icon'></div>
                    View this repository
                </a>
            </Link>
                
            </footer>
            <style jsx>
            {`
            footer {
                text-align: center;
                height: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                color: ${colors.neutrals.c600};
                font-size: 18px;
            }   
            footer a{
                display:flex;
                align-items: center;
                gap:10px;
            }

            .icon{
                width:32px;
                height:32px;
                background-image: url('/icons/github-default.svg');
                background-size: cover;
            }

            a:hover{
                background: ${colors.brand.default};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }
            a:hover .icon{
                background-image: url('/icons/github-active.svg');
            }

            `}
            </style>
        </>
        
    )
}