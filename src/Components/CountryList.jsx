import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

// class CountriesList extends Component {
//   state = {
//     countries: countries,
//   };

//   componentDidMount() {
//     this.setState({
//       countries: countries,
//     });
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div
//             className="col-5"
//             style={{
//               maxHeight: '90vh',
//               overflow: 'scroll',
//               textDecoration: 'none',
//             }}
//           >
//             <div className="list-group">
//               <ul>
//                 {this.state.countries.map((country) => {
//                   return (
//                     <li key={country.name.official}>
//                       {country.flag}
//                       <Link to={'/country/${country.cca3}'}>
//                         {country.name.official}
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const CountryList = ({ countries }) => {
  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            {' '}
            <Link to={`/${country.cca3}`}>{country.name.official}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
