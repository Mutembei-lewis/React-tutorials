import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, 
  MDBContainer } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import "./nav.css"

class NavbarPage extends Component {
state = {
  collapseID: ""
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
  return (
    <Router>
      <MDBContainer fluid >
        <MDBNavbar className="customnavbar"  expand="md" >
          <MDBNavbarBrand>
            <strong className="white-text">HAPPYCODER</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler image="https://mdbootstrap.com/img/svg/hamburger3.svg?color=00FBD8" onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="#!">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem >
                <MDBNavLink to="#!">FUN</MDBNavLink>
              </MDBNavItem>
             
             
            </MDBNavbarNav>
            <MDBNavbarNav right>
             
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        
      </MDBContainer>
    </Router>
    );
  }
}

export default NavbarPage;