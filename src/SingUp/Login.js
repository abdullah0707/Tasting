import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import {Link} from "react-router-dom";
import 'mdbreact/dist/css/mdb.css';

function Login(){

 const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 


  return (
    <MDBContainer>
      <MDBRow className="my-0 justify-content-center">
        <MDBCol md="6">
          <MDBCard className="mt-5">
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Log in</strong>
                </h3>
              </div>

              <MDBInput label="Your email" group type="email" value={email} onChange={e => setEmail(e.target.value)} error="wrong" success="right" />

              <MDBInput label="Your password" group type="password" value={password} onChange={e => setPassword(e.target.value)} className="mb-0" />

              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn type="button" color="indigo lighten-2" rounded className="btn-block z-depth-1a">
                  Log in
                </MDBBtn>

                  </div>
                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                      or Log in with:
                    </p>
                  <div className="row my-3 d-flex justify-content-center">

                <MDBBtn color="primary" className="fb" size="md" social="fb">
                  <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                </MDBBtn>

                <MDBBtn color="danger" className="gplus" size="md" social="gplus">
                  <i className="fa fa-google-plus fa-lg" aria-hidden="true"></i>
                </MDBBtn>

              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <Link to="/Signup" className="blue-text ml-1 font-weight-bold"> Sign Up </Link>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;