import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import supremePhoto from './18.jpg';
import shopPhoto from './19.jpg';
import followPhoto from './16.jpg';
import brandsPhoto from './4.jpg';
import { setUser } from './../../ducks/reducer';


 class Home extends Component {

componentDidMount(){
    axios.get('/auth/me').then(response => {
        console.log('response', response)
        this.props.setUser(response.data);
    })
}

    render(){
        console.log(this.props.userId)
        return(
    <div className = 'total'>
    <Header />
    <div className = 'background'>
        <img className = 'largeimg' src = { supremePhoto } alt='failed'/>
        </div>
        <div className = 'lowerLevelBoxes'>
            <Link to = "/brands">
            <div className = 'brandsBox'>
                <img className = 'brandsPhoto' src = { brandsPhoto } alt='brand photo'/>
                <div className="centered">BRANDS</div>
                </div>
                </Link>
                <Link to= "/shop">
            <div className = 'shopBox'>
                <img className = 'shopPhoto' src = { shopPhoto } alt='shop photo'/>
                <div className="centered">SHOP</div>
            </div>
            </Link>
            
            <Link to= "/follow">
            <div className = 'followBox'>
            <img className = 'followPhoto' src = { followPhoto }/>
            <div className="centered">FOLLOW</div>
            </div>
            </Link>
            </div>
            
       
        </div>

        )
    }
}
function mapDispatchToProps(state){
return state;
}
export default connect(mapDispatchToProps, { setUser })(Home)