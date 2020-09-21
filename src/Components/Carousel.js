import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBCardFooter,
  MDBTooltip,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
} from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import './Carousel.css';


const Carousel = () => {
  return (
    <section className='text-center my-3'>
      <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem className="overflow-auto" size="sm" itemId='1'> 
              <MDBCol md='2' className='clearfix'>
                <MDBCard narrow ecommerce className='mb-1'>
                  <MDBCardImage cascade top src='/img/h1.jpg' alt='sample photo' />
                  <MDBCardBody  cascade>
                    <MDBCardText>Product information</MDBCardText>
                    <MDBCardFooter className='mx-0 px-0'>
                      <span className='float-left'>69$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-shopping-basket' />
                          <span>Add to Cart</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='2' className='clearfix'>
                <MDBCard narrow ecommerce className='mb-1'>
                  <MDBCardImage cascade  top  src='/img/h2.jpg'  alt='sample photo' />
                  <MDBCardBody cascade>
                    <MDBCardText>Product information</MDBCardText>
                    <MDBCardFooter className='mx-0 px-0'>
                      <span className='float-left'>99$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-shopping-basket' />
                          <span>Add to Cart</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='2' className='clearfix'>
                <MDBCard narrow ecommerce className='mb-1'>
                  <MDBCardImage cascade top src='/img/h3.jpg' alt='sample photo' />
                  <MDBCardBody cascade>

                    <MDBCardText>Product information</MDBCardText>
                    <MDBCardFooter className='mx-0 px-0'>
                      <span className='float-left'>49$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-shopping-basket' />
                          <span>Add to Cart</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol> 

              <MDBCol md='2' className='clearfix'>
                <MDBCard narrow ecommerce className='mb-1'>
                  <MDBCardImage
                    cascade
                    top
                    src='/img/h4.jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>

                    <MDBCardText>Product information</MDBCardText>
                    <MDBCardFooter className='mx-0 px-0'>
                      <span className='float-left'>69$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-shopping-basket' />
                          <span>Add to Cart</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='2' className='clearfix'>
                <MDBCard narrow ecommerce className='mb-1'>
                  <MDBCardImage cascade top src='/img/h5.jpg' alt='sample photo' />
                  <MDBCardBody cascade>

                    <MDBCardText>Product information</MDBCardText>
                    <MDBCardFooter className='mx-0 px-0'>
                      <span className='float-left'>99$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-shopping-basket' />
                          <span>Add to Cart</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='2' className='clearfix'>
                <MDBCard narrow ecommerce className='mb-1'>
                  <MDBCardImage cascade top src='/img/h6.jpg' alt='sample photo' />
                  <MDBCardBody cascade>

                    <MDBCardText>Product information</MDBCardText>
                    <MDBCardFooter className='mx-0 px-0'>
                      <span className='float-left'>49$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-shopping-basket' />
                          <span>Add to Cart</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>

            <MDBCarouselItem className="overflow-auto" size="sm" itemId='2'>
              <MDBCol md='2' className='clearfix'>
                <MDBCard narrow ecommerce className='mb-1'>
                  <MDBCardImage
                    cascade
                    top
                    src='/img/h7.jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <MDBCardText>Product information</MDBCardText>
                    <MDBCardFooter className='mx-0 px-0'>
                      <span className='float-left'>69$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-shopping-basket' />
                          <span>Add to Cart</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='2' className='clearfix'>
                <MDBCard narrow ecommerce className='mb-1'>
                  <MDBCardImage
                    cascade
                    top
                    src='/img/h8.jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <MDBCardText>Product information</MDBCardText>
                    <MDBCardFooter className='mx-0 px-0'>
                      <span className='float-left'>99$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-shopping-basket' />
                          <span>Add to Cart</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='2' className='clearfix'>
                <MDBCard narrow ecommerce className='mb-1'>
                  <MDBCardImage cascade top src='/img/h9.jpg' alt='sample photo' />
                  <MDBCardBody cascade>

                    <MDBCardText>Product information</MDBCardText>
                    <MDBCardFooter className='mx-0 px-0'>
                      <span className='float-left'>49$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-shopping-basket' />
                          <span>Add to Cart</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol> 

              <MDBCol md='2' className='clearfix'>
                <MDBCard narrow ecommerce className='mb-1'>
                  <MDBCardImage
                    cascade
                    top
                    src='/img/h10.jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>

                    <MDBCardText>Product information</MDBCardText>
                    <MDBCardFooter className='mx-0 px-0'>
                      <span className='float-left'>69$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-shopping-basket' />
                          <span>Add to Cart</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='2' className='clearfix'>
                <MDBCard narrow ecommerce className='mb-1'>
                  <MDBCardImage
                    cascade
                    top
                    src='/img/h11.jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>

                    <MDBCardText>Product information</MDBCardText>
                    <MDBCardFooter className='mx-0 px-0'>
                      <span className='float-left'>99$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-shopping-basket' />
                          <span>Add to Cart</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md='2' className='clearfix'>
                <MDBCard narrow ecommerce className='mb-1'>
                  <MDBCardImage cascade top src='/img/h12.jpg' alt='sample photo' />
                  <MDBCardBody cascade>

                    <MDBCardText>Product information</MDBCardText>
                    <MDBCardFooter className='mx-0 px-0'>
                      <span className='float-left'>49$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-shopping-basket' />
                          <span>Add to Cart</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>

            
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </section>
  );
};

export default Carousel;