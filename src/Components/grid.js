import React, {Component} from "react";
import {MDBContainer,MDBBox, MDBCol,MDBRow,MDBIcon} from "mdbreact";
import Api from "./store";

const gridcode ={
    position:"absolute",
    width:"100vw",
    top:"57%",
    backgroundColor:"black",

}
const columncss ={
    padding:"0px",
    boxSizing:"border-box",
    border: "2px solid white",
    zIndex:"900",
    backgroundColor:"white",
    margin:"10px",
    position:"relative",
    height:"210px",

}
// const imagesizer ={
//     position:"absolute",
//     width:"100%",
//     height:"70%"
// }
const captionblock = {
    fontSize:"15px",
    position:"absolute",
    bottom: "3%"
}

class GridBlock extends Component{
  


    render(){
        
        return(
            <MDBContainer fluid style={gridcode}>
                <MDBRow center>
                    <MDBCol size="10" style={columncss}> 
                    {/* <img style={imagesizer} src={"https://images.unsplash.com/photo-1594954825820-e9ebfd9d0e21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"} alt="not visible" /> <br></br> */}
                    <Api/>
                    <MDBBox style={captionblock}>
                        <p> The text caption should be here right below the image 
                        </p>  
                        </MDBBox>
                    
                    <div style={{position:"absolute", bottom:"-5%", width:"100%",fontSize:"40px"}}>
                        <MDBIcon style={{color:"red",margin:"8px",fontSize:"16px"}}  icon="heart" />  
                         <MDBIcon style={{color:"blue",margin:"8px", fontSize:"20px"}}  far icon="thumbs-up" />
                         <MDBIcon style={{color:"orange",margin:"8px", fontSize:"20px"}}  icon="share-alt" />
                    </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}
export  default GridBlock;
