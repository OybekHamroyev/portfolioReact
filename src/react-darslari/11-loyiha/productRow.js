import React, { Component } from 'react';
class ProductRow extends Component {
    render() {
        const product=this.props.product;
        const name=product.stocked?product.name:              //omorda bulmasa qizil rang
        <span style={{color:"red"}}>{product.name}</span>
        return (
            <tr>
                <td>{name}</td>
                <td>${this.props.product.price}</td>
            </tr>
)
    }
}
export default ProductRow;
