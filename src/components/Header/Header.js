import React, {Component} from 'react';
import './Header.css';
import SideBar from '../SideBar/SideBar.js'
// import '../SideBar/SideBar.css';

export default class Header extends Component {
    
    render() {
       

        return (
            
                <div className='Header'>
                    <SideBar />
                    <div className='logo'>UNDERGROUND SAINTS</div>
                    <div className='cartandmenu'>
                        <div className='cart'>cart</div>
                        <img className='menu' src='./save-img.png' alt='menu'/>

                    </div>

                </div>
            

        )
    }
}