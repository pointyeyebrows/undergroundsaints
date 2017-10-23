import React, { Component } from 'react';
import './Brands.css';
import Header from '../Header/Header';
import supreme from './supreme.jpg';
import bape from './bape.jpg'

export default class brands extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className = 'all'>
                
                <div className = 'supremeBox'>
                <img className = 'supremePhoto' src = { supreme }/> 
                </div>
                <div className = 'bapeBox'>
                <img className = 'bapePhoto' src = { bape }/> 
                </div>
                <div className = 'supremeBox'>
                <img className = 'supremePhoto' src = { supreme }/> 
                </div>
                <div className = 'supremeBox'>
                <img className = 'supremePhoto' src = { supreme }/> 
                </div>
                </div>
                </div>
        )
    }
}