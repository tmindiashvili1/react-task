import React, { Component } from 'react';
import { connect } from 'react-redux'
import Product from '../components/product'

class ResultContainer extends Component {

    historyList = () => {
        const history = this.props.history
        
        return history.map((products, index) => { 
            return (
                <div className="product-list" key={index}>
                    {this.productList(products.boughtProduct)}
                </div>
            )
           
        })
    }

    productList = (products) =>{
        let price = 0;
        const productList = products.map((product, index) => {
            price+=product.price
            return (        
                <div className="checked-product">
                    <Product 
                        product={product}
                    />
                    {products.length!==1 && index!==products.length-1 ? (<img src={require('../assets/plus.png')} alt="plus" width="20" height="20"/>) : null }
                </div>
            )
        });

        return (
            <div className="checked-product">
                {productList}
                <p>={price}</p>
            </div>
        )

    }

    render(){
        return (
            <div>
                <h1>ისტორია</h1>
                <div>{this.historyList()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        history: state.products.history
    }
}  

  
export default connect(mapStateToProps, null)(ResultContainer)