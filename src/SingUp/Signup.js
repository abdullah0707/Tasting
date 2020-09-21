import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import {Link} from "react-router-dom";
import Login from './Login';

function Signup() {
  return (
    <MDBContainer>
      <MDBRow className="my-0 justify-content-center">
        <MDBCol md="6">
          <MDBCard className="mt-5"> 
            <MDBCardBody>
              <form>
                <p className="font-weight-bold h1 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput label="Full name" size='sm' icon="user" group type="text" validate error="wrong" success="right" />

                  <MDBInput label="Your email" size='sm' icon="envelope" group type="email" validate error="wrong" success="right" />
                  
                  <MDBInput  label="Confirm your email"  size='sm' icon="exclamation-triangle" group  type="text"  validate error="wrong" success="right" />
                  
                  <MDBInput  label="Your password" size='sm'  icon="lock" group type="password"  validate />

                  <MDBInput  label="Confirm your password"  size='sm' icon="exclamation-circle" group  type="password"  validate error="wrong" success="right" />
                  
                  <MDBInput label="Address" size='sm' icon="globe" group type="text" validate error="wrong" success="right" />

                  <MDBInput label="City" md="6" size='sm' icon="map" group type="text" validate error="wrong" success="right" />

                  <MDBInput label="Number Phone" md="2" size='sm' icon="mobile" group type="number" validate error="wrong" success="right" />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="indigo lighten-2" type="submit">
                    Sign up
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Do you have an account ?
                <Link to="/Login" className="blue-text ml-1 font-weight-bold"> Login </Link>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;