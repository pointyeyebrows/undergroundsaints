import React, { Component } from 'react';
import './Brands.css';
import Header from '../Header/Header';
import supreme from './supreme.jpg';
import bape from './bape.jpg'
import FOG from './fearofgod.jpg';
import offWhite from './offwhite.jpg';
import palace from './palace.jpg';


export default class brands extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className = 'all1'>
                < a href = "http://www.supremenewyork.com/index">
                <div className = 'supremeBox'>
                <img className = 'supremePhoto' src = { supreme }/> 
                </div>
                </a>
                <a href = "https://bape.com/index/">
                <div className = 'bapeBox'>
                <img className = 'bapePhoto' src = { bape }/> 
                </div>
                </a>
                <a href = "https://fearofgod.com/">
                <div className = 'FOGBox'>
                <img className = 'FOGPhoto' src = { FOG }/> 
                </div>
                </a>
                <a href = "https://www.off---white.com/en/US">
                <div className = 'offWhiteBox'>
                <img className = 'offWhitePhoto' src = { offWhite }/> 
                </div>
                </a>
                <a href = "https://www.palaceskateboards.com/">
                <div className = 'palaceBox'>
                <img className = 'palacePhoto' src = { palace }/> 
                </div>
                </a>
                
                </div>
                </div>
        )
    }
}