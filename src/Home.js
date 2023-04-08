import { useState } from 'react';
import './Home.css';
import logo from './assets/logo.svg';
import bubbleIcon from './assets/bubble.svg'
import { json, Link } from 'react-router-dom';
import { SearchResultsList } from './assets/searchItem-home/SearchResultsList';
import { SearchBar } from './assets/searchItem-home/SearchBar';

function Home() {

  const [results, setResults] = useState([]);
  return (
    <div>
      <body className="container-home">
        <header className="logo-home">
          <img src={logo} alt="logo" width={170} height={27}/>
        </header>

        <main className="main-area">
            <img className="bubbleIcon" src={bubbleIcon} alt="bubble icon" width={250} height={250}/>

          {/* search bar อยู่ใน assets/searchItem-home */}
          <div className="wrapper-home">
            <div className="search-bar-home">
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
