import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    console.log('Render runs');
    return (
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            Lab - WikiCountries
          </a>
        </div>
      </nav>
    );
  }
}

// const Navbar =() =>{
//   return(
//     <nav>
//       <h1>
//         Lab-WikiCountries
//       </h1>
//     </nav>
//   );
// };

export default Navbar;
