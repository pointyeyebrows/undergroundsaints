import React, { Component } from 'react';
import './Shop.css';
import Header from '../Header/Header';

export default class Shop extends Component{
    render(){
        return(
            <div>
                <Header />
            <div className = 'shopPage'>
                <div className = 'topsBox'>tops</div>
                <div className = 'bottomsBox'>bottoms</div>
                <div className = 'shoesBox'>shoes</div>
                <div className = 'outerwearBox'>outerwear</div>
                <div className = 'hatsBox'>hatss</div>
                <div className = 'accesoriesBox'>accesories</div>
            </div>
            </div>
        )

    }
    
}