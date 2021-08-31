import React from 'react';
import products from './JSON/smartwatches.json'
const SmartWatches = () => {
    return (
        <div className="smartwatch">
            <div className="titles">
                <p>Explore Awesome Products</p>
                <h4>Recommended For You</h4>
            </div>
            <div className="cards">
            {products.map(product=>{
            return <div className="card">
                        <img src={product.img}/>
                        <p>{product.name}</p>
                        <div className="price">{product.price}</div>      
                   </div> 
                })
            }    
            </div>
            <span className="buttonArea">
                <a href="#" className="exploreBtn">Explore Other Products</a>
            </span>
        </div>
    );
};

export default SmartWatches;