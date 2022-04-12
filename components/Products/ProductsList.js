import ProductCard from "./ProductCard"

export default function ProductList ({products, page, maxProducts}) {
    return(
        <>
        <div className="products_list">
            {products
            .slice( (page-1)*maxProducts , (page-1)*maxProducts + maxProducts )
            .map( product => (
                <ProductCard key={product["_id"]} product={product} />)
            )
            }
        </div>

        <style jsx>
        {`
            .products_list{
                display: flex;
                flex-wrap: wrap;
                gap: 80px 24px;
                margin-top: 64px;
                justify-content: center;
            }
        `}
        </style>
        </>
    )
}