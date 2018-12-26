import React, { Component } from 'react';

class ProductCheckboxComponent extends Component {
    
    products = () => {
        const products = this.props.products;
        return products.map((product, index) => {
            return (
                <div className="checkbox" key={index}>
                    <input
                        name={product.name}
                        type="checkbox"
                        checked={product.checked}
                        onChange={ () => this.props.checkProducts(index) } />
                    <p>
                        {product.name}
                    </p>
                    <p>
                        ${product.price}
                    </p>
                </div>
            )
        })
    }

    render(){
        return (
            <div className="checkbox-container">
                {this.products()}
            </div>
        )
    }
}

export default ProductCheckboxComponent