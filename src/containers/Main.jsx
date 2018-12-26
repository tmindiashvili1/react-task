import React, { Component } from 'react';
import { 
    products,
    checkProducts,
    addNewProducts
 } from '../actions/productActions'
import { connect } from 'react-redux'
import Product from '../components/product'
import ProductCheckbox from '../components/checkboxProduct'

class MainContainer extends Component {

    componentDidMount(){
        this.props.initProducts()
    }

    inCartProduct = () => {
        const products = this.props.products
        let countActiveProduct = 0
        products.forEach(product=>{
            if(product.checked){
                countActiveProduct++
            }
        })
        if(countActiveProduct===0){
            return <p>არა არის არჩეული</p>
        } else {
            return products.map((product, index) => { 
                if(product.checked){
                    return (
                        <div className="checked-product">
                            { countActiveProduct>1 && index!==0 ? (<img src={require('../assets/plus.png')} alt="plus" width="20" height="20"/>) : null }

                            <Product 
                                product={product}
                            />
                        </div>
                    )
                }
            })
        }
    }

    totalPrice = () => {
        const products = this.props.products
        let price = 0
        products.forEach(product => { 
            if(product.checked){
                price+=product.price
            }
        })

        return price
    }
    render(){
        return (
            <div>
                <h1>
                    მთავარი გვერდი
                </h1>
                <div className="checked-products">
                    {this.inCartProduct()}
                </div>
                <div>
                    <button onClick={()=>{this.props.addNewProducts()}}>
                        ყიდვა
                    </button>
                </div>
                <div>
                    <strong>${this.totalPrice()}</strong>
                </div>
                <div>
                    <ProductCheckbox
                        products={this.props.products}
                        checkProducts={this.props.checkProducts}
                    />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        products: state.products.products
    }
  }
  
  const mapDispatchToProps = (dispatch, props) => {
    return { 
        initProducts: (data) => dispatch(products(data)),
        checkProducts: (data) => dispatch(checkProducts(data)),
        addNewProducts: (data) =>dispatch(addNewProducts(data))
      }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)