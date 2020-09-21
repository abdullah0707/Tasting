import React, { Component } from "react";
  import {MDBTable, MDBTableBody, MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

  class Information extends Component {
    state = {
      activeItem: "1"
    };

    toggle = tab => e => {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

    render() {
      return (
        <MDBContainer>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
              OVERVIEW
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
              SPECIFICATIONS
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
            <MDBTable striped>
                {/* <MDBTableHead>
                    <tr>
                    <th>First</th>
                    <th>Last</th>
                    </tr>
                </MDBTableHead> */}
                <MDBTableBody sm="12" md="6" lg="6">
                    <tr>
                    <td>Resolution</td>
                    <td>Frame Rate	</td>
                    <td>Response Time	</td>
                    <td>Colour Name</td>
                    <td>Model Name</td>
                    <td>Model Number</td>
                    <td>Screen Size</td>
                    <td>Size</td>
                    </tr>
                    <tr>
                    <td>1920 x 1080 pixels</td>
                    <td>60Hz</td>
                    <td>8ms</td>
                    <td>Black</td>
                    <td>HOHO</td>
                    <td>HK 4304 S</td>
                    <td>43 inch</td>
                    <td>None</td>
                    </tr>
                    
                </MDBTableBody>
            </MDBTable>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className=" mt-2">
              Highlights
            </p>
            <ul>
                <li>3 hdmi with 2 usb and 1 cable/antenna input</li>
                <li>1 composite video input with 1 component video input and 1 audio input</li>
                <li>Pc audio in mini jack and headphone out and osd language en/ar and 3d-noise reduce</li>
                <li>1 gb + 4 gb ram with wifi built-in</li>
                <li>Android 8.0 internet tv</li>
            </ul>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default Information;