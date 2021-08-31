import React, { Component } from 'react';
class SearchBar extends Component {
    // constructor() {
    //     super();
    //     this.state={}

    // }
    handlerChange=(e)=>{
        this.props.onFilterTextChange(e.target.value)  // yuqori komponentga (value ni ) uzatish

    }
    handlderInstockChange=(e)=>{   
        this.props.onInStockChange(e.target.checked)  //yuqoriga uzatish
    }
    render() {
        return (
            <div>
                <input placeholder="Izlash..." value={this.props.filterText} onChange={this.handlerChange} />
                <p>
                    <input type="checkbox" id="onlyInStock" name="onlyInStock" checked={this.props.inStockOnly}
                    onChange={this.handlderInstockChange}/>
                    <label htmlFor="onlyInStock">Faqat omborda mavjud bo'lgan mahsulotlar</label>
                </p>
            </div>

        )
    }
}
export default SearchBar;
