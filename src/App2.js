import logo from './assets/logo.svg';
import './App2.css';
import { Link } from 'react-router-dom';

function App2() {
  return (
    <div>
      <body className='container'>
        <header className="logo">
          <img src={logo} alt="logo" width={213} height={36}/>
        </header>
      
      </body>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to='/app3'>App3</Link>
      </header> */}
    </div>
  );
}

export default App2;
