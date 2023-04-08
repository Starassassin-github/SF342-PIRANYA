import React from "react";
import { useState } from 'react';
import './SearchBar-result.css';
import searchButton from '../assets/search button.png';
import { json, Link } from 'react-router-dom';

export const SearchBar = ({setResults}) => {
  
  {/* search list testing */}
  const [input, setInput] = useState("")

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(json => { 
      const results = json.filter((user) => {
        return (
          value && 
          user && 
          user.name && 
          user.name.toLowerCase().includes(value)
        );
      });
      setResults(results);
    });
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
    return (
        <div class="wrapper-result">
            <div className='search_box-result'>
              <input 
              type="text" 
              class="input_search" 
              placeholder='สำรวจคีย์เวิร์ดที่คุณสนใจ' 
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              ></input>
              <div class="search_btn">
                <Link to="/SeenResult">
                  <img src={searchButton} alt="bubble icon" width={50} height={50}/>
                </Link>
              </div>
            </div>
          </div>
    )
}