import React, { Component } from 'react';
class SearchBar extends Component {
    // constructor() {
    //     super();
    //     this.state={}

    // }
handleChange=(e)=>{
    this.props.setHandleChange(e.target.value)
}
handleCheck=(e)=>{
    this.props.setCheckbox(e.target.checked)
}
    render() {
        return (
            <div>
                <input placeholder="Izlash..." value={this.props.filterText} onChange={this.handleChange} />
                <p>
                    <input type="checkbox" id="onlyInStock" name="onlyInStock" checked={this.props.inStockOnly}
                    onChange={this.handleCheck}/>
                    <label htmlFor="onlyInStock">Faqat omborda mavjud bo'lgan mahsulotlar</label>
                </p>
            </div>

        )
    }
}
export default SearchBar;
