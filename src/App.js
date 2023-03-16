import React from 'react';
import { ReactComponentElement } from 'react';
import { ReactDOM } from 'react';
import './Result.css';
import logo from './asset/logo.svg';
import backIcon from './asset/back button.png';
import likes from './asset/likes.png';
import retweets from './asset/retweets.png';
import search from './asset/search button.png';
import views from './asset/view count.png';
import twitter from './asset/twitter.png';


function App(){
    return(
        <div className='container'>
            <div className='head'>
                <div className='header'>
                  <img className='back-icon' src={backIcon} alt="Back Icon" width={27} height={27}/>
                  <img className='logo' src={logo} alt="logo" width={143} height={29}/>
                </div>

              <div className='header-body'>
                <text className='keyword-title'>คีย์เวิร์ด :</text>
              </div>
            </div>
        </div>
    );
}

export default App;
