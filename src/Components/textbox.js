import React, {Component} from "react";
import {MDBBox} from "mdbreact";
// import  {unmountComponentAtNode} from "react-dom";





class BoxPage extends Component{
    constructor(props){
        super(props)
        this.state ={
          name: "",
          message:"",
          buttontext:"Get Started"
        }
       
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    } 

handleChange(event){
    this.setState({name:event.target.value, message: "WELCOME"})
}
handleClick(event){
    
  var x = document.getElementById("inputblock");
    if (x.style.display === "block"){
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
    
}
handleKeyPress(event){
    if (event.key === "Enter"){
     this.setState({buttontext:"Continue"})
        var y=  document.getElementsByClassName("blocktodelete");
        if (y[0].style.display=== "block"){
            y[0].style.display = "none";
        }
        var x = document.getElementById("inputblock");
    if (x.style.display === "block"){
        x.style.display = "none"
    } else {
        x.style.display = "block"
    } 
    var z=  document.getElementsByClassName("classictext");
    if (z[0].style.display === "none"){
        z[0].style.display = "block";
    }

     
       
    }
}

    render(){
        return(
            <MDBBox className="customBox">
                <MDBBox className="welcomeText"> 
                      {this.state.message + " " + this.state.name}
                    </MDBBox>
                   
                    <button style={{display:"block"}} className="blocktodelete" size="sm" onClick={this.handleClick}>
                        {this.state.buttontext}
                    </button>
                    <div className="classictext" style={{display:"none"}}> All big things start small right? Here's what I got for you {this.state.name}</div>
               
                   
             <input type="text" id="inputblock" onKeyPress={this.handleKeyPress} placeholder="Enter your name " style={{color:"white"}} onChange={this.handleChange}  className="personalinput" /> 
            
 
             </MDBBox>
        );
    }
}




export default  BoxPage;