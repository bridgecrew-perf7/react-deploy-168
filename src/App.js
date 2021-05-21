

import Login from './components/pages/Login/Login'
import {Link,Switch,Route, BrowserRouter} from 'react-router-dom';
import productpage from './components/pages/Productpage/Productpage';
import Cart from'./components/pages/Cart/Cart'
import React from 'react';
import productdetails from '../src/components/pages/productdetails/productdetails'
import axios from 'axios';
import CustomerDetails from '../src/components/pages/CustomerDetails/CustomerDetails'

export default class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
      <Switch>
     <Route exact path="/" component={Login}/>
     <Route  path="/productpage" component={productpage}/>
     <Route  path="/Cart" component={Cart}/>
     <Route  path="/productdetails" component={productdetails}/>
     <Route  path="/CustomerDetails" component={CustomerDetails}/>
   </Switch>
   </BrowserRouter>
    )
  }
}


