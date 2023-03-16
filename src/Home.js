import { useState } from 'react';
import './Home.css';
import logo from './assets/logo.svg';
import bubbleIcon from './assets/bubble.svg'
import { json, Link } from 'react-router-dom';
import { SearchResultsList } from './assets/components/SearchResultsList';
import { SearchBar } from './assets/components/SearchBar';

function Home() {

  const [results, setResults] = useState([]);
  return (
    <div>
      <body className="container">
        <header className="logo">
          <img src={logo} alt="logo" width={170} height={27}/>
        </header>

        <main className="main-area">
          <img className="bubbleIcon" src={bubbleIcon} alt="bubble icon" width={250} height={250}/>

          {/* search bar อยู่ใน assets/components */}
          <div className="wrapper">
            <div className="search-bar">
            <SearchBar setResults={setResults}/>
            {results && results.length > 0 && <SearchResultsList results={results} />}
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}

export default Home;
