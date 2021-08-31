import { useEffect, useState } from "react";
import FilterableProductTable from './FilterableProductTable';
const API_URL="http://amock.io/api/vd/products";

function Products () {
    const [products, setData]=useState([])
    const [isLoading, setIsLoading]=useState(true)
useEffect(()=>{
    fetch(API_URL).then(res=>res.json()).then(data=>{
        let jsonData=eval('(' + data + ')'); // massivdan ajratib olib beradi obyektlarni
        setData(jsonData); setIsLoading(false);
    }).catch(err=>setData(err))
}, [])
    if(isLoading){return <h4>Istimos sabr qiling, ma'lumotlar yuklanyapti...</h4>}
    else {
    return <FilterableProductTable products={products}/>}
}
export default Products;