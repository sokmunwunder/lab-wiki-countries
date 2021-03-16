import React, { Component } from 'react';
import countries from './../countries.json';

class CountryDetails extends Component {
  state = {
    country: null,
  };

  componentDidMount() {
    console.log('Component has been mounted');
    this.loadCountry();
  }

  componentDidUpdate(previousProps, previousState) {
    console.log('Component updated due to changes in props or states');
    if (
      this.props.match.params.countryCode !==
      previousProps.match.params.countryCode
    ) {
      console.log(
        'componentDidUpdate was triggered by a change in id being passed in the prop object'
      );

      this.loadCountry();
    }
  }

  loadCountry = () => {
    const countryCode = this.props.match.params.countryCode;
    const country = countries.find((item) => item.cca3 === countryCode);
    this.setState({
      country: country,
    });
  };

  getCountryName(countryCode) {
    return countries.find((item) => item.cca3 === countryCode).name.common;
  }

  //   loadCountry = () => {
  //     const country = countries.find(
  //       (item) => item.cca3 === this.props.match.params.cca3
  //     );
  //     this.setState({
  //       country: country,
  //     });
  //   };

  render() {
    const country = this.state.country;
    return (
      <div>
        <h1>{this.props.match.params.countryCode}</h1>
        {country && (
          <div>
            <h1>{country.name.official}</h1>
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km</td>
                  <sup>2</sup>
                </tr>
                <tr>
                  <td> Borders</td>
                  <td>
                    <ul>
                      {country.borders.map((countryCode) => (
                        <li key={countryCode}>
                          <a href={`/${countryCode}`}>
                            {this.getCountryName(countryCode)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default CountryDetails;

//   render() {
//     return (
//       <div className="col-7">
//         {this.state.countries.map((country) => {
//           return (
//               {this.state.country && (
//             <div>
//               <h1>{country.name.official}</h1>

//               <table className="table">
//                 {/* //   <table className="table"> */}
//                 <thead></thead>
//                 <tbody>
//                   <tr>
//                     <td style={{ width: '30%' }}>{this.state.country.capital}</td>
//                     {/* <td>{country.capital}</td> */}
//                   </tr>
//                   <tr>
//                     <td>Area</td>
//                     <td>
//                       {this.state.country.area} km
//                       <sup>2</sup>
//                     </td>
//                   </tr>
//                    <tr>
//                     <td>Borders</td>
//                     <td>
//                       <ul>
//                         {this.state.countries.borders.map((country) => {
//                           return (
//                             <li key={country.name.official}>
//                               <a href={'/country.cca3'}>
//                                 {country.name.official}
//                               </a>{' '}
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             )}
//           );
//         })}

// {/* //     <h1>France</h1>
//     <table class="table">
//       <thead></thead>
//       <tbody>
//         <tr>
//           <td style="width: 30%">Capital</td>
//           <td>Paris</td>
//         </tr>
//         <tr>
//           <td>Area</td>
//           <td>
//             551695 km
//             <sup>2</sup>
//           </td>
//         </tr>
//         <tr>
//           <td>Borders</td>
//           <td>
//             <ul>
//               <li><a href="/AND">Andorra</a></li>
//               <li><a href="/BEL">Belgium</a></li>
//               <li><a href="/DEU">Germany</a></li>
//               <li><a href="/ITA">Italy</a></li>
//               <li><a href="/LUX">Luxembourg</a></li>
//               <li><a href="/MCO">Monaco</a></li>
//               <li><a href="/ESP">Spain</a></li>
//               <li><a href="/CHE">Switzerland</a></li>
//             </ul>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
//    </div>
//    </div>
//    </div>
//    </div>
//    </div> */}
//       </div>
//     );
//   }
// }
