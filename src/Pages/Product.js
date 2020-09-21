import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getById } from "../api/products";
import Information from "../Components/Information/Information";
import { addToCart, increment, decrement } from "../store/actions/actions";
import './Home.css';



function Product(props){
                    console.log(props.quantity);

  const [product, setProduct] = useState({});


    useEffect(() => {
      const id = props.match.params.id
        getById( parseInt(id) ) 
        .then((product) => {
          setProduct(product);
          })
    }, []);
        
 

  function addToCart(product){ return props.addToCart(product, quantity); }

    return(
      <div className="container my-4">
        <div className={'row'}>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
                  {/* <!--Slides--> */}
                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                          <img className="d-block w-100" src={product.image1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" src={product.image2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" src={product.image3} alt="Third slide" />
                        </div>
                      </div>
                  {/* <!--/.Slides--> */}
        
                  {/* <!--Controls--> */}
                      <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                        <span className="sr-only">Next</span>
                      </a>
                  {/* <!--/.Controls--> */}
                  <ol className="carousel-indicators justify-content-center mx-1">
                    <li data-target="#carousel-thumb" data-slide-to="0" className="active">
                      <img src={product.image1} width="100"/>
                    </li>
                    <li data-target="#carousel-thumb" data-slide-to="1">
                      <img src={product.image2} width="100"/>
                    </li>
                    <li data-target="#carousel-thumb" data-slide-to="2">
                      <img src={product.image3} width="100"/>
                    </li>
                </ol>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-sm-6">

                  <h1>{product.name}</h1>

                  <p>Price: {product.price}$</p>

                  <p>{product.description}</p>

                  <br /><br />

                  <div className="def-number-input number-input">
                  <button onClick={props.decrement} className="minus"></button>
                  <input className="quantity" name="quantity" value={props.quantity} type="number" />
                  <button onClick={props.increment} className="plus"></button>
                  
                  </div>

                  <br /><br />

                  <p>Total: {props.quantity * product.price}$</p>

                  <button className="btn btn-dark" onClick={()=> addToCart(product)}>
                      Add To Cart
                  </button>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">

                <a className="text-ed">
                  <i className="fa fa-podcast fa-fw" aria-hidden="true"></i>
                      1 year warranty
                </a>

                <div>
                  <br /><br />
                  <a className="text-ed">
                  <i className="fa fa-shopping-bag fa-fw" aria-hidden="true"></i>{' '}{' '}
                    Sold by Story Shopping
                  </a>
                </div>
                
                <br /><br />

                <div>
                <a className="text-ed">
                  <i className="fa fa-reply fa-fw" aria-hidden="true"> </i>{' '}{' '}
                    FREE RETURNS
                  <br />
                  <span className="text-muted"> Get free returns on eligible items</span> 
                </a>
              </div>

                <br /><br />

                <a className="text-ed">
                  <i className="fa fa-truck fa-flip-horizontal fa-fw" aria-hidden="true"> </i>{' '}{' '}
                    TRUSTED SHIPPING
                  <br />
                  <span className="text-muted">Free shipping when you spend EGP 350 and above</span> 
                </a>
            </div>
        </div>
      <Information />
    </div>
    );
  }

  const mapStateToProps = (state) => {
    return{
      quantity : state.quantity
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          increment: () => dispatch(increment(quantity)),
          decrement: () => dispatch(decrement(quantity)),
          addToCart: (productinfo, quantity) => dispatch(addToCart(productinfo, quantity)), 
      };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Product);

 