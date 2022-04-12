import ProductList from "./ProductsList";

import {useState, useMemo} from 'react'
import Count from "./Count";
import Pagination from "./Pagination";
import Filter from "./Filter";
import Sort from "./Sort";
import colors from "../../styles/colors";

const sortOptions = ["Most Recent", "Lowest Price", "Highest Price"];

export default function ProductWrapper ({products}) {

    const [filter,setFilter] = useState("All Products");
    const [sort,setSort] = useState(sortOptions[0]);
    const [page,setPage] = useState(1);

    const groupedProducts = products.reduce((acc,item) =>{
        return{
            ...acc,
            [item.category] : acc[item.category] ? acc[item.category].concat(item) : [item]
        }
    }, {"All Products" : products});

    const filterOptions = Object.keys(groupedProducts);

    const filteredProducts = useMemo( () => {
        setPage(1)
        return groupedProducts[filter];
    },[products,filter])
    
    const sortedProducts = useMemo( () => {
        switch(sort) {
            case sortOptions[1] : return [...filteredProducts].sort((a,b) => a.cost - b.cost);
            case sortOptions[2] : return [...filteredProducts].sort((a,b) => b.cost - a.cost);
            default : return filteredProducts;
        }
    },[filteredProducts,sort])

    
    
    const maxProducts = 16;
    const lastPage = Math.ceil(sortedProducts.length / maxProducts);


    return(
        <>
            <section className="container" id="products">
            
                <h1><span>Tech</span><span> Products</span></h1>

                <div className="products_menu">
                    <Filter active={filter} onChange={setFilter} filterOptions={filterOptions}/>
                    <Sort active={sort} onChange={setSort} />
                    <Pagination page={page} setPage={setPage} lastPage={lastPage}/>
                </div>

                <ProductList products={sortedProducts} page={page} maxProducts={maxProducts}/>
                <div className="products_footer">
                    <Count current={page} total={sortedProducts.length} maxProducts={maxProducts}/>
                    <Pagination page={page} setPage={setPage} lastPage={lastPage}/>
                </div>
                
            </section>


            <style jsx>
            {`
                .container{
                    padding-top: 15px;
                }
                h1{
                    font-weight: 900;
                    font-size: 48px;
                    line-height: 80%;
                    text-transform: uppercase;
                }

                h1 span:nth-child(1){
                    background: linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 200%);;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }

                h1 span:nth-child(2){
                    color: ${colors.neutrals.c900}
                }

                .products_menu{
                    display: flex;
                    justify-content: space-between;
                    font-weight: 600;
                    color: ${colors.neutrals.c600};
                    font-size: 18px;
                    height: 60px;
                }
                .products_footer{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 600;
                    color: ${colors.neutrals.c600};
                    font-size: 18px;
                    height: 60px;
                    margin-top: 64px;
                }
            `}
            </style>
        </>
    )
}