import React, { Component } from 'react';
import './Shop.css';
import Header from '../Header/Header';
import accesoriesPhoto from './9.jpg';
import outerwearPhoto from './2.jpg';
import topsPhoto from './shirt.jpg-large';
import bottomsPhoto from './15.jpg';
import shoesPhoto from './30.jpg';
import hatsPhoto from './31.jpg';

export default class Shop extends Component{
    render(){
        return(
            <div>
                <Header />
            <div className = 'shopPage'>
                <div className = 'topsBox'>
                <img className = 'topsPhoto' src ={ topsPhoto }/>
                <div class="centered">TOPS</div>
                </div>
                <div className = 'bottomsBox'>
                <img className = 'bottomsPhoto' src = { bottomsPhoto }/>
                <div class="centered">BOTTOMS</div>
                </div>
                <div className = 'shoesBox'>
                <img className = 'shoesPhoto' src = {shoesPhoto}/>
                <div class="centered">FOOTWEAR</div>
                </div>
                <div className = 'outerwearBox'>
                <img className = 'outerwearPhoto' src = { outerwearPhoto } alt = 'outerwear'/>
                <div class="centered">OUTERWEAR</div>
                </div>
                <div className = 'hatsBox'>
                <img className = 'hatsPhoto' src = { hatsPhoto } />
                <div class="centered">HATS</div>
                </div>
                <div className = 'accesoriesBox'>
                <img className = 'accesoriesPhoto' src = { accesoriesPhoto } alt = 'accesories' />
                <div class="centered">ACCESORIES</div>
                </div>
            </div>
            </div>
        )

    }
    
}