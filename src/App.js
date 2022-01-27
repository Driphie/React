import React from 'react';  
import  NavBar  from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import  Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import ItemsListConteiner from './components/ItemListConteiner/ItemsListConteiner';
import CartProvider from './components/CartContext/CartContext';
import { getFirebase } from './Firebase';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Home/>
        <Switch> 
       
        
          
        <Route exact path="/item/:itemId">
            <ItemDetailConteiner />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemsListConteiner greeting="Estás en la seccion: " categoryId=""/>
          </Route>         
          <Route path="/cart">
            <Cart />
          </Route> 
          <Route exact path="/checkout">
            <Checkout/>
          </Route>       
        </Switch>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;