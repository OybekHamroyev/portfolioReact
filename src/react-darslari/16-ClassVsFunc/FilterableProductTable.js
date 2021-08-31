import { useState } from "react";
import ProductRow from "./ProductRow";
import Search from "./Search";

function FilterableTable(props) {
    const [filterText, setFilterText]=useState('');
    const [inStockOnly, setInStockOnly]=useState(false);
    const rows=[];
     props.products.forEach(product => {
         if(product.name.toLowerCase().indexOf(filterText.toLowerCase())==-1){return}
         if(inStockOnly && !product.stocked){return}
        rows.push(<ProductRow product={product}/>)
    });
    return <div>
            <Search filterText={filterText} inStockOnly={inStockOnly} setFilterText={setFilterText}
                setInStockOnly={setInStockOnly}/>
        <table style={{textAlign:"left"}}>
            <thead>
                <tr>
                    <th>Nomi</th>
                    <th>Narxi</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>
}
export default FilterableTable;