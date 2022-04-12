import colors from "../../styles/colors";

export default function Count ({current,total,maxProducts}) {
    return (
        <>
        <div className="count">
            <p className="text_color">
            {total < maxProducts ? total : (current-1)*maxProducts + maxProducts}<span>of</span>{total}
            </p>
            <p>products</p>
        </div>

        <style jsx>
        {`
            .count{
                display: flex;
                margin-left: 272px;
                gap: 10px;
                flex: 1 1 0%;
                justify-content: center;
            }
            .text_color{
                background: linear-gradient(175deg, #176FEB 15.66%, #FF80FF 106.58%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                gap:6px;
                display:flex;
            }
            
        `}
        </style>
        </>
    )
}