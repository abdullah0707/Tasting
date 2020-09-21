import React from "react";
// import Carousel from '../Components/Carousel';
// import Sections from '../Components/Sections/Sections';
// import Sale from '../Components/Sale/Sale';
// import FilBaby from '../Components/SectionsFils/Baby/FilBaby';
// import FilBeauty from '../Components/SectionsFils/Beauty/FilBeauty';
// import FilElectronics from '../Components/SectionsFils/Electronics/FilElectronics';
// import FilFashion from '../Components/SectionsFils/Fashion/FilFashion';
// import FilHomeKitchen from '../Components/SectionsFils/HomeKitchen/FilHomeKitchen';
// import FilOfficeProducts from '../Components/SectionsFils/OfficeProducts/FilOfficeProducts';
// import FilSupermarket from '../Components/SectionsFils/Supermarket/FilSupermarket';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';

import './Home.css';

function Home(){
  return (
    <MDBContainer className="col-12 mt-2">
      <MDBCarousel activeItem={1} length={9}  showControls={true} showIndicators={false} className="z-depth-1" slide>
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img  className="d-block w-100" src="/img/y0.png" alt="First slide"  />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img  className="d-block w-100" src="/img/y1.png" alt="Second slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src="/img/y2.png"  alt="Third slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100" src="/img/y3.png"  alt="Third slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img className="d-block w-100" src="/img/y4.png"  alt="Third slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <img className="d-block w-100" src="/img/y5.png"  alt="Third slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="7">
            <MDBView>
              <img className="d-block w-100" src="/img/y6.png"  alt="Third slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="8">
            <MDBView>
              <img className="d-block w-100" src="/img/y7.png"  alt="Third slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="9">
            <MDBView>
              <img className="d-block w-100" src="/img/y8.png"  alt="Third slide" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
{/* 
    
    <Sections />
    <Carousel />

    <Sale />
    <Carousel />

    <FilElectronics />
    <Carousel />

    <FilFashion />
    <Carousel />

    <FilBeauty />
    <Carousel />

    <FilBaby />
    <Carousel />

    <FilHomeKitchen />
    <Carousel />

    <FilOfficeProducts />
    <Carousel />

    <FilSupermarket />
    <Carousel /> */}


    </MDBContainer>

  );
}

export default Home;






   
