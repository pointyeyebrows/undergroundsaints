import React, {Component} from 'react';
import './Header.css';
import SideBar from '../SideBar/SideBar.js' 
// import '../SideBar/SideBar.css';
import menuImg from './save-img.png'

export default class Header extends Component {
    
    render() {
       

        return (
            
                <div className='Header'>
                    {/* <SideBar /> */}
                    <div className='logo'>UNDERGROUND SAINTS</div>
                    <div className='cartandmenu'>
                        <div className='cart'>cart</div>
                        <img className='menu' src={menuImg} alt='menu'/>
                        <a href='http://localhost:3005/auth'><button>Log In</button></a>

                    </div>
                    

                </div>
            

        )
    }
}