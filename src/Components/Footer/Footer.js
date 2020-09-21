import React from 'react';
import './Footer.css';


export default function Footer (){

    return(
//    <!-- Footer -->
<footer className="footer page-footer font-small unique-color-dark mt-5">

  <div className="footer">
    <div className="container footer">

      {/* <!-- Grid row--> */}
      <div className="row py-4 d-flex align-items-center">

        {/* <!-- Grid column --> */}
        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0">Get connected with us on social networks!</h6>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-6 col-lg-7 text-center text-md-right">

          {/* <!-- Facebook --> */}
          <a className="fb-ic">
            <i className="fa fa-facebook-f mr-4"> </i>
          </a>
          {/* <!--Twitter --> */}
          <a className="li-ic">
            <i className="fa fa-twitter mr-4"> </i>
          </a>

          {/* <!-- Linkedin --> */}
          <a className="lin-ic">
            <i className="fa fa-linkedin mr-4" aria-hidden="true"></i>
          </a>
          
          {/* <!--Instagram--> */}
          <a className="ins-ic">
            <i className="fa fa-instagram mr-4"> </i>
          </a>
           {/* <!--Google+ --> */}
          <a className="go-ic">
          <i className="fa fa-google-plus" aria-hidden="true"></i>
          </a>
        </div>
        {/* <!-- Grid column --> */}

      </div>
      {/* <!-- Grid row--> */}

    </div>
  </div>

  {/* <!-- Footer Links --> */}
  
  <div className="container text-center text-md-left mt-5">

    {/* <!-- Grid row --> */}
    <div className="row mt-3">

      {/* <!-- Grid column --> */}
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        {/* <!-- Content --> */}
        <h6 className="text text-uppercase font-weight-bold">Company name</h6>
        <hr className="deep mb-4 mt-0 d-inline-block mx-auto" />
            {/* style="width: 60px;" */}
        <p className="text-p">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        {/* <!-- Links --> */}
        <h6 className="text text-uppercase font-weight-bold">Products</h6>
        <hr className="deep mb-4 mt-0 d-inline-block mx-auto" />
            {/* style="width: 60px;" */}

        <p className="text-p">
          <a href="#!">Electronics</a>
        </p>
        <p className="text-p">
          <a href="#!">Fashion</a>
        </p>
        <p className="text-p">
          <a href="#!">Beauty</a>
        </p>
        <p className="text-p">
          <a href="#!">Baby</a>
        </p>
        <p className="text-p">
          <a href="#!">HomeKitchen</a>
        </p>
        <p className="text-p">
          <a href="#!">OfficeProducts</a>
        </p>
        <p className="text-p">
          <a href="#!">Supermarket</a>
        </p>

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        {/* <!-- Links --> */}
        <h6 className="text text-uppercase font-weight-bold">Useful links</h6>
        <hr className="deep mb-4 mt-0 d-inline-block mx-auto" />
            {/* style="width: 60px;" */}

        <p className="text-p">
          <a href="#!">Your Account</a>
        </p>
        <p className="text-p">
          <a href="#!">Become an Affiliate</a>
        </p>
        <p className="text-p">
          <a href="#!">Shipping Rates</a>
        </p>
        <p className="text-p">
          <a href="#!">Help</a>
        </p>

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        {/* <!-- Links --> */}
        <h6 className="text text-uppercase font-weight-bold">Contact</h6>
        <hr className="deep mb-4 mt-0 d-inline-block mx-auto" />
            {/* style="width: 60px;" */}

        <p className="text-p">
          <i className="fa fa-home mr-3"></i> Nasr City</p>
        <p className="text-p">
          <i className="fa fa-envelope mr-3"></i> abdullahelgammal25@gmail.com</p>
        <p className="text-p">
          <i className="fa fa-phone mr-3"></i> +2 0109 424 2767</p>
        <p className="text-p">
          <i className="fa fa-print mr-3"></i> +2 0111 057 7475</p>

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row/ --> */}

  </div>
  {/* <!--End Footer Links --> */}

  {/* <!--Start Copyright --> */}
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://www.linkedin.com/in/abdullah-mohammed-b47234121/"> Front-End ABDULLAH { "React" } Developer.</a>
  </div>
  {/* <!--End Copyright --> */}

  {/* <!--End Footer --> */}
</footer>
    );
}
