import React, { Component } from 'react';
import ProductRow from './productRow';

class ProductTable extends Component {
//     constructor(props) {
//         super(props);
// }
    render() {
        const filterText=this.props.filterText;  // olib saqlaymiz
        const inStockOnly=this.props.inStockOnly; //cheched belgilangan bulsa(checkboxdan)

        const rows = []; ////massiv yaratamiz
        this.props.products.forEach(product => {  ///kelgan massiv elemlarini 
            if(product.name.toLowerCase().indexOf(filterText.toLowerCase())===-1) {return;} //(shart qanoatlansa usha mahsulot qushilmaydi)
            if (inStockOnly && !product.stocked) {return;} //chiqib ketish (shart qanoatlansa usha mahsulot qushilmaydi)
            rows.push(<ProductRow product={product} key={product.name}/>)   //push orqali birma bir rows massiviga ProductRow b.n birga  tiqamiz
                                                        // ProductRow ning har biriga product(massiv elementi)ni berib yuiboramiz
                console.log(!product.stocked)                                        //agar izlanayotgan filtText product.name ga teng bulmasa row ga qushmaymiz(return -chiqib ketamiz)
        /// instockeOnly true bulsa hamda product.stocked xossasi false bulsa(obmorda mavjud emas bazadan)
                                                    });
        return (
            <table>
                <thead>
                    <tr>
                        <th align="left">Nomi</th>
                        <th align="left">Narxi</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}
export default ProductTable;
