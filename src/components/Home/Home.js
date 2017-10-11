import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from '../Header/Header';


export default class Home extends Component {
    render(){
        return(
    <div>
    <Header />
    <div className = 'background'>
        <img className = 'largeimg' src = './IMG_8819.jpg' alt='failed'/>
        </div>
        </div>

        )
    }
}