import React from "react";
import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBRow, MDBCol, MDBView, MDBTooltip } from 'mdbreact';
import { Link } from 'react-router-dom';
import 'mdbreact/dist/css/mdb.css';


export default function ProductItem(props){
    const {product} = props;

    return (
        <Link to={"/products/" + product.id}>
        <MDBRow className="mx-0 px-0">
        <MDBCol md='12' className="mx-0 px-0">
        <MDBCard className="my-3 mx-0" narrow>
          <MDBView cascade>
            <MDBCardImage hover overlay='white-slight' className='card-img-top' src={product.image1} alt='food' />
          </MDBView>

          <MDBCardBody>
            <p className="text-muted">
                {product.name}
            </p>
            <div className="dropdown-divider"></div>

            <MDBCardText>
              {product.price}$
              <MDBTooltip domElement placement='top'>
                <i className='float-right grey-text fa fa-shopping-basket' />
                <span>Add to Cart</span>
              </MDBTooltip>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </Link>
    );
}

    
      