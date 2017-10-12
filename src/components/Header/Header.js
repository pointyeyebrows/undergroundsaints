import React, {Component} from 'react';
import './Header.css';
import SideBar from '../SideBar/SideBar.js'
import '../SideBar/SideBar.css';
import menuImg from './save-img.png'

export default class Header extends Component {
    constructor() {
        super()

        this.state = {
            toggle: false,
            classValue: ""
        }
    }

    toggleBox() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    getClass() {
        const slider = this.state.toggle ? "boxcoverShow" : "boxcoverHide"
        this.setState({classValue: slider})
    }

    render() {
        console.log(this.state)
        return (
            <div className = 'wholeHeader'>
            <SideBar classForSlider={this.state.classValue}/>
            <div className='Header'>
                
                <div className='logo'>UNDERGROUND SAINTS</div>
                <div className='cartandmenu'>
                    <div className='cart'>cart</div>
                    <img onClick={() => {this.toggleBox(), this.getClass()}} className='menu' src={menuImg} alt='menu'/>
                    

                </div>
            </div>
            </div>

        )
    }
}