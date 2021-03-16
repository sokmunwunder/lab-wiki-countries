import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import countries from './countries.json';
import Navbar from './Components/Navbar';
import CountryList from './Components/CountryList';
import CountryDetails from './Components/CountryDetails';

// class App extends Component {
//   state = {
//     countries: countries
//   };

// }

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Navbar />
      <aside>
        <CountryList countries={countries} />
      </aside>
      {/* <Switch> */}
      {/* <Route path="/" component={CountryList} /> */}
      <main>
        <Route path="/:countryCode" component={CountryDetails} />
      </main>
      {/* </Switch> */}
      {/* <CountriesList />
        <CountryDetails /> */}
    </div>
    // </BrowserRouter>
  );
}

export default App;
