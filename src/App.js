import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Brands from './components/Brands/Brands';
import Items from './components/Items/Items';
import Product from './components/Product/Product';
import Follow from './components/Follow/Follow';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';





class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      <HashRouter>
      
      <div>
       
        <Route component = { Home } exact path = '/'  />
        {/* <Route component = { Cart } path = '/cart'/>
        <Route component = { Brands } path = '/brands'/>
        <Route component = { Items } path = '/items'/>
        <Route component = { Product } path = '/product'/>
        <Route component = { Follow } path = '/follow'/>*/}
        <Route component = { Shop } path = '/Shop'/> 
        
      
      


      </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;
