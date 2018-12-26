import React, { Component } from 'react';

class ProductComponent extends Component {
    constructor(props){
        super(props)
    }

    image = (type) => {
        switch(type){
            case 'Donut': return (<img src={require('../assets/donut.jpeg')} alt={type} width="50" height="50"/>)
            case 'Coffee': return (<img src={require('../assets/coffee.png')} alt={type} width="50" height="50"/>)
            case 'Burger': return (<img src={require('../assets/burger.png')} alt={type} width="50" height="50"/> )           
            default: return '' 
        }
    }
    render(){
        return (
            <div className="product">
                {this.image(this.props.product.name)}
            </div>
        )
    }
}

export default ProductComponent