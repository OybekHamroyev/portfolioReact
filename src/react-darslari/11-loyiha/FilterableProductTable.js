import React, {Component} from 'react';
import SearchBar from './searchBar';
import ProductTable from './productTable';

const products=[
    {name:"Shaftoli", price:3.10, stocked:true,},     
    {name:"Gilos", stocked:true, price:3.40},
    {name:"Nok", price:1.80, stocked:false,},     
    {name:"Sut", price:2.00, stocked:true,},     
    {name:"Olma sharbati", price:1.50, stocked:true,},     
    {name:"Mineral suv", price:0.30, stocked:false,},     

]
class FilterableProductTable extends Component {
    constructor (){
        super();
          ///yuqoridagi komponentga stateni saqlaymiz
        this.state={filterText:"", inStockOnly:false}
        //filterText - izlanayotgan product
        //inStockeOnly  - omborda mavjudmi
    }
    setHandleChange=(filterText)=>{
        this.setState({ filterText:filterText  });
    }
    setCheckbox=(inStockOnly)=>{
        this.setState({ inStockOnly:inStockOnly  });
    }
    render(){
        return (
            <div>
                <SearchBar setCheckbox={this.setCheckbox} inStockOnly={this.state.inStockOnly} 
                setHandleChange={this.setHandleChange} filterText={this.state.filterText} />
                <ProductTable products={products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
            </div>
        )
    }
}
export default FilterableProductTable;