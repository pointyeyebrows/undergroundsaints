import React, {Component} from 'react';
import './SideBar.css';

export default class SideBar extends Component {
    constructor() {
        super();
        // this.state = {
        //     toggle: false
        // }
    }
    render() {
        // const slideMenu = this.state.toggle ? "openBoxCover" : "boxCover"
        return (
            <div className={this.props.classForSlider}>
                <div className='box1'></div>
                <div className='box2'>
                    <a href="/home" className='site-nav_link'>Home</a>
                    <a href="/shop" className='site-nav_link'>Shop</a>
                    <a href="/brands" className='site-nav_link'>Brands</a>
                    <a href="/follow" className='site-nav_link'>Follow</a>
                    <a href='http://localhost:3005/auth'>
                        <button>Log In</button>
                    </a>
                </div>
            </div>
        )

    }
}