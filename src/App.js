
import logo from './logo.svg';
import './App.css';
import craiglist from "./craiglist.json"

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    objects:craiglist
  }
  
  
  getObjects=()=>{
  const listArray = this.state.objects.map((listing,i)=>{
    return( 
      <div>
      {console.log(listing.Title)}
  <h3>{listing.Title}</h3>
      </div>
    )

    
  })
  }
  // getContacts = () => {
  //   let contactArray = this.state.showContacts.map((thisContact,i) => {
  //     return (
  //       <div>
  //         <span id="image">
  //         <img width="40px" height="65px" src={thisContact.pictureUrl} alt="celeb"/>
  //         </span>
  
  //         <span id="name">
  //         &nbsp; {thisContact.name}
  //         </span>
  
  //         <span id="popularity">
  //          &nbsp; {thisContact.popularity} 
  //         </span>
  
  //         <span id="button">
  //          <Button onClick={()=>this.deleteContact(i)}>Delete</Button>
  //          </span>
           
  //       </div>
  //     )
  //   })


  render() {
    return (
      <div>
        hello
        {this.getObjects()}
      </div>
    )
  }
}


