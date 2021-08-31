import {PureComponent} from 'react';
import SearchBar from './searchBar';
import ProductTable from './productTable';

class FilterableProductTable extends PureComponent {
    constructor (props){
        super(props);
        this.state={filterText:"", inStockOnly:false}
        //filterText - izlanayotgan product
        //inStockeOnly  - omborda mavjudmi
    }
    handleFilterTextChange=(filterText)=>{ //componentdan (text) olib qaytadi
        this.setState({filterText:filterText})    //statega joylaymiz
    }
    
    handleInStockChange=(inStockOnly)=>{
        this.setState({inStockOnly:inStockOnly})
    }
    render(){
        return (
            <div>
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}
                onFilterTextChange={this.handleFilterTextChange} onInStockChange={this.handleInStockChange}/>
                <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
            </div>
        )
    }
}
export default FilterableProductTable;