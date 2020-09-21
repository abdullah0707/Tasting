import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CartIcon from "./Components/Carticon";
import store from './store/store';
import {Provider} from "react-redux";
import Footer from './Components/Footer/Footer';
import './App.css';

//Page
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Signup from "./SingUp/Signup";
import Login from "./SingUp/Login";

function App(){
 
  return (
    <Router>

          <nav className="navbar navbar-expand-xl sticky-top navbar-dark">
            <Link className="navbar-brand font-weight-bold" to="/">React E-commerce</Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse text-right" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                  </li>
                </ul>
                <form className="form-inline mx-auto my-2 my-lg-0">
                  <div>
                  <input className="form-control mr-sm-0" type="search" placeholder="Search" aria-label="Search" />
                  <button type="button" className="btn btn-light btn-sm m-1 px-2">
                  <i className="fa fa-search fa-2x" aria-hidden="true"></i>
                  </button>
                  </div>
                    </form>
                        <button className="btn btn-danger btn-sm">Logout</button>
                      <div className="nav-item dropdown ml-auto text-right">
                          <Link className="nav-link sign-in" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-user fa-2x  mx-0 px-0" aria-hidden="true"></i>
                          </Link>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            
                          <Link className="nav-link Login" to="/Login">Log in</Link>
                          <div className="dropdown-divider"></div>
                            <li className="nav-item ">
                            <Link className="nav-link signup" to="/Signup">Create account</Link>
                          </li> 
                        </div>
                      </div> 
            <CartIcon />
              </div>

          </nav>
          {/* Pages */}
          <Route path="/" exact component={Home} />
          <Route path="/Products" exact component={Products} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Products/:id" exact component={Product} />
          
          
    <Footer />
    
    </Router>   
  );
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;