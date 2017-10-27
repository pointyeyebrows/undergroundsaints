import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Cart.css'

class Cart extends Component {
placeOrder(){
    console.log('id and cart', this.props.userId, this.props.cart)
    axios.post('/api/shop/addProductsOrdered', { user_id: this.props.userId, cart: this.props.cart })
}
render() {
    console.log('whole cart', this.props.cart);
    const cart = this.props.cart;
    const product = cart.map((item, i) => {
        return(
            <div key={i}>
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
            <button onClick = { () => this.placeOrder() }>place order</button>
           
           
        </div>
    )
   
     
    
  }
}

function mapStateToProps(state) {
  return {
      cart: state.cart,
      userId: state.userId
    };
}

export default connect(mapStateToProps)(Cart);