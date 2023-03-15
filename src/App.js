import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import App2 from './App2';
import App3 from './App3';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' Component={App2}/>
          {/* <Route exact path='/app3' Component={App3}/> */}
        </Switch>
      </Router>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <Link to ='/App2' color='#fff'>Test</Link>
        
        
    //   </header>
    // </div>
  );
}

export default App;
