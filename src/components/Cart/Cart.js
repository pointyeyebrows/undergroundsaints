import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cart.css'

class Cart extends Component {

  render() {
    const cart = this.props.cart;
    const product = cart.map((item, i) => {
        return(
            <div>
                <img src = {item.img_url}/>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.size}</p>
            </div>
        )
    })
    return(
        <div>
            {product}
           
           
        </div>
    )
   
     
    
  }
}

function mapStateToProps(state) {
  return {cart: state.cart};
}

export default connect(mapStateToProps)(Cart);