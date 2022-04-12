import colors from "../../styles/colors";

const sortOptions = ["Most Recent", "Lowest Price", "Highest Price"];

export default function Sort({active, onChange}){

    return(
        <>
        <div className="sort_container">
            <div className="sort_text">Sort by:</div>
            {sortOptions.map(option => 
                <div key={option} className={`sort_option ${option === active ? 'active' : ''}`} onClick={() => onChange(option)}>
                    <span>{option}</span> 
                </div>
            )}
        </div>

        <style jsx>
        {`
            .sort_container{
                display: flex;
                gap: 12px;
                align-items: center;
                padding-left: 40px;
                border-left: 2px solid ${colors.neutrals.c300};
            }

            .sort_text{
                padding-right:4px;
            }

            .sort_option{
                display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 8px 24px;
            height: 43px;
            background: #E6F0FF;
            border-radius: 12px;
            cursor:pointer;
            }

            .sort_option span{
                background: ${colors.brand.default};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }

            .active{
                background: ${colors.brand.default};
                animation: hover_bg_out 1s ease;
                background-size: 200px 100%;
            }
            .active:hover{
                background-image: ${colors.brand.default};
                animation: hover_bg_in 1s ease;
                background-size: 200px 100%;
                
            }
            .active span{
                color: ${colors.neutrals.c100};
                -webkit-text-fill-color: unset;
                text-fill-color: unset;
            }

            @keyframes hover_bg_in {
                from {background-position: 200px 100%;}
                to {background-position: 400px 600px;}
            }
            @keyframes hover_bg_out {
                from {background-position: 200px 100%;}
                to {background-position: 0px 600px;}
            }
        `}

        </style>

        </>
    )
}