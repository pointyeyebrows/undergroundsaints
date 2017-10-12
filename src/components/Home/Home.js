import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import supremePhoto from './IMG_8819.jpg';
import shopPhoto from './2.jpg';
import followPhoto from './3.jpg';


export default class Home extends Component {
    render(){
        return(
    <div>
    <Header />
    <div className = 'background'>
        <img className = 'largeimg' src = { supremePhoto } alt='failed'/>
        </div>
        <div className = 'lowerLevelBoxes'>
            <div className = 'brandsBox'>Brands</div>
            <div className = 'shopBox'>
                <img className = 'shopPhoto' src = { shopPhoto } alt='shop photo'/>
                <p>shop</p> 
            </div>
            <img className = 'followBox' src = { followPhoto }/>
            </div>
        </div>

        )
    }
}