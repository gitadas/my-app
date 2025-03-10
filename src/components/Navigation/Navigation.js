// import React from "react";

// const Navigation = () => {

//   const navItems = ["Welcome", "Photo Gallery", "Weather Information", "Community Blog", "Contact Us"];
//   const navList = navItems.map((nav, index) => <li key={index}>{nav}</li>);

//   return (
//     <div>
//       <h3>Navigation</h3>
//       <ul>{navList}</ul>
//      </div>
//     );
// };

// export default Navigation;


import React, { Component } from 'react'
import './Navigation.css' //Styles

export default class Navigation extends Component {
  render() {

    function showModal(){
      let modal = document.getElementById("myModal");
      modal.style.display = "block";

      let modalTitle = document.getElementById("modalTitle");
        modalTitle.innerText = "Contact Us";
    }

    return (
        <nav>
            <ul className="navigation">                 
                <li><a className="navBarStyle" href="#welcome">Welcome</a></li>
                <li><a className="navBarStyle" href="#photo">Photo Gallery</a></li>
                <li><a className="navBarStyle" href="#weather">Weather Information</a></li>
                <li><a className="navBarStyle" href="#blog">Community Blog</a></li>
                <li><a className="navBarStyle" onClick={showModal}>Contact Us</a></li>
            </ul>            		
        </nav>
    )
  }
}