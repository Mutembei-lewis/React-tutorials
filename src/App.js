import React, {Component, Fragment} from "react";
import {MDBContainer} from "mdbreact";
import NavbarPage from "./Components/navbar";
import "./index.css";
import BoxPage from "./Components/textbox";
import GridBlock from "./Components/grid";





class App extends Component{
  
  render(){
    return(
      <Fragment>
      
      <MDBContainer fluid className="header-container">
      <NavbarPage />
      <BoxPage />
      </MDBContainer>
      <GridBlock />
     
     
      </Fragment>
        
      
    );
  }
  }

export default App;