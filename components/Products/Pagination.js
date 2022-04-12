import Image from 'next/image'
import colors from '../../styles/colors'

export default function Pagination({page, setPage, lastPage}) {

    const prevPage = () => {
        if(page>1){
            setPage(page-1)
        }
    }

    const nextPage = () => {
        if(page<lastPage){
            setPage(page+1)
        }
    }


    return (
        <>
        <div className="pagination_container menu">
            <button className={page === 1 ? 'disable' : ''} onClick={prevPage}><span><Image  src='/icons/chevron-default.svg' width={40} height={40}/></span></button>
            <div className="page">Page <span className='page_color'>{page} of {lastPage}</span></div>
            <button className={page === lastPage ? 'disable' : ''} onClick={nextPage}><span><Image  src='/icons/chevron-default.svg' width={40} height={40}/></span></button>
        </div>

        <style jsx>
        {`
            .pagination_container button:nth-child(1){
                transform: rotate(180deg);
            }

            .menu{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 16px 8px 16px 24px;
                background: #FFFFFF;
                border: 1px solid #DAE4F2;
                border-radius: 16px;
            }

            .menu button{
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 8px;
                width: 40px;
                height: 40px;
                background: #E5F0FF;
                border-radius: 8px;
                border:none;
                align-items: center;
                justify-content: center;
                cursor:pointer;
            }

            .menu button:active{
                background: ${colors.brand.light_2};
            }

            button span{
                display: flex;
                align-items: center;
            }

            .menu .page{
                margin:0 24px;
                width: 110px;
                text-align: center;
            }
            .page_color{
                background: ${colors.brand.default};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }

            .disable{
                pointer-events: none;
                background: ${colors.neutrals.c200};
            }
            .disable span {
                opacity:.2;
            }
        `}
        </style>

        </>
    )
}