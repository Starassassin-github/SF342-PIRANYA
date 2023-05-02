import React from "react";
import { useState, useContext, useEffect } from 'react';
// import './SearchBar.css';
import '../searchItem-home/SearchBar.css'
import searchButton from '../search-button.svg'
import { useNavigate } from "react-router-dom";
import {connect} from 'react-redux'
import { json, Link } from 'react-router-dom';
import axios from 'axios';

// Context
import DataGlobal from "../../store/DataGlobal";
import { getDataQuery, setData } from "../../store/actions/Data.actions";


export const SearchBar = ({setResults,res}) => {


  const context = useContext(DataGlobal);

  let navigate = useNavigate(); 

  
  {/* search list testing */}
  const [input, setInput] = useState("")

  const  fetchData = async (value) => {
    console.log(value);
    let path = `/SeenResult`; 
    const data = {
      value,
    }
    try {
      console.log("fetching......");
      getDataQuery(data, context.dispatch)
      
    } catch (error) {
      console.log(error);
    }


    
  }

  const handleChange = (value) => {
    setInput(value)
  }

  useEffect(() => {
    if (context.stateData.dataQuery !== null) {
        navigate('/SeenResult')
    }
  }, [context.stateData.dataQuery])

    return (
        <div class="wrapper">
            <div className='search_box'>
              <input 
              type="text" 
              class="input_search" 
              placeholder='สำรวจคีย์เวิร์ดที่คุณสนใจ' 
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              ></input>
              <div class="search_btn">
              {/* <Link to="/SeenResult"> */}
              {/* <Link to="/SeenResult" state={input}> */}
                  <img onClick={() => fetchData(input)} src={searchButton} alt="bubble icon" width={65} height={65}/>
              {/* </Link> */}
              </div>
            </div>
          </div>
    )

}