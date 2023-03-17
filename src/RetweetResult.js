import React from 'react';
import { ReactComponentElement } from 'react';
import { ReactDOM } from 'react';
import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { BrowserRouter as Router, Switch, Route, Link, useNavigate, Routes} from 'react-router-dom';
import {SearchResultsList} from './components/SearchResultsList';
import './Result.css';
import logo from './assets/logo.svg';
import noImage from './assets/noImage.svg';
import backIcon from './assets/back button.png';
import fav from './assets/fav (unclick).png';
import retweets from './assets/retweets.png';
import search from './assets/search button.png';
import seen from './assets/seen (unclick).png';
import twitter from './assets/twitter.png';
import { MdAccountCircle } from "react-icons/md";
import {BsTriangleFill} from "react-icons/bs";
// npm install react-icons --save
// npm i @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRetweet } from "react-icons/fa";
import SeenResult from './SeenResult';
import FavResult from './FavResult';

function RetweetResult(){
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    
    return(
            <div className='container'>
                <div className='head'>
                    <div className='header'>
                        <img className='back-icon' src={backIcon} alt="Back Icon" width={27} height={27} onClick={() => navigate(-1)}/>
                        <img className='logo' src={logo} alt="logo" width={143} height={29}/>
                        <div className="search-bar">
                            <SearchBar setResults={setResults}/>
                            {results && results.length > 0 && <SearchResultsList results={results} />}
                        </div>
                    </div>

                <div className='header-body'>
                    <text className='keyword-title'>คีย์เวิร์ด :</text>
                    {/* ดึงคำจาก keyword มาเปลี่ยนตรงนี้ */}
                    <text className='keyword'>ไก่ทอด</text>

                    <img className='twitter' src={twitter} alt="Twitter Icon" width={30} height={30}/>
                    <text className='q-name'>จำนวนทวีตทั้งหมดที่เกี่ยวข้อง</text>

                    {/* ดึงค่าจำนวนทวิตมาใส่ตรงนี้ */}
                    <text className='quantity'>23,456 ทวีต</text>

                    <Link to="/SeenResult">
                        <img className='seen-icon' src={seen} alt="The most views count icon" width={64} height={64} />
                    </Link>

                    <Link to="/RetweetResult">
                        <img className='retweet-icon' src={retweets} alt="The most views count icon" width={64} height={64}/>
                    </Link>

                    <Link to="/FavResult">
                        <img className='fav-icon' src={fav} alt="The most views count icon" width={64} height={64}/>
                    </Link>

                    <BsTriangleFill className='triangle' size={30} style={{color: "white"}}/>
                </div>
                </div>

                <div className='tweet-data'>
                    <div className='tweet-data-header'>
                        <text className='tweet-data-title'>ทวีตที่มีการรีทวีตมากที่สุด</text>
                        {/* ดึงจำนวนครั้งที่เห็นมากที่สุด */}
                        <text className='tweet-data-bar'>|</text>
                        <FaRetweet style={{color: "#00acee", opacity:0.7}}/>
                        <text className='tweet-data-count'>189,072 ครั้ง</text>
                    </div>

                    <div className='tweet-data-user'> 
                        {/* รูปภาพ + ชื่อ + tag user account */}
                        <div className='user-icon'>
                            <MdAccountCircle size={64}/>
                        </div>

                        <div className='user-info'>
                            <text className='username'>ท่านผู้พัน</text>
                            <text className='user-tag'>@FRYCHICK_LOVER</text>
                        </div>
                    </div>

                    {/* content twitter */}
                    <div className='tweet-content'>
                        <text className='tweet-text'>ไก่ตัวแม่โดนทอด</text>
                        <img className='tweet-image' src={noImage} alt="tweet-content-image" width={600} height={600}/>
                    </div>
                </div>

            </div>
    );
}

export default RetweetResult;








// import React from 'react';
// import { ReactComponentElement } from 'react';
// import { ReactDOM } from 'react';
// import { useState } from 'react';
// import { SearchBar } from './components/SearchBar';
// import {SearchResultsList} from './components/SearchResultsList';
// import './Result.css';
// import logo from './assets/logo.svg';
// import noImage from './assets/noImage.svg';
// import backIcon from './assets/back button.png';
// import fav from './assets/fav (unclick).png';
// import retweets from './assets/retweets.png';
// import search from './assets/search button.png';
// import seen from './assets/seen (unclick).png';
// import twitter from './assets/twitter.png';
// import { MdAccountCircle} from "react-icons/md";
// import {BsTriangleFill} from "react-icons/bs"
// // npm install react-icons --save
// // npm i @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaRetweet } from "react-icons/fa";

// function RetweetResult(){
//     const [results, setResults] = useState([]);
//     return(
//         <div className='container'>
//             <div className='head'>
//                 <div className='header'>
//                   <img className='back-icon' src={backIcon} alt="Back Icon" width={27} height={27}/>
//                   <img className='logo' src={logo} alt="logo" width={143} height={29}/>
//                   <div className="search-bar">
//                         <SearchBar setResults={setResults}/>
//                         {results && results.length > 0 && <SearchResultsList results={results} />}
//                     </div>
//                 </div>

//             <div className='header-body'>
//                 <text className='keyword-title'>คีย์เวิร์ด :</text>
//                 {/* ดึงคำจาก keyword มาเปลี่ยนตรงนี้ */}
//                 <text className='keyword'>ไก่ทอด</text>

//                 <img className='twitter' src={twitter} alt="Twitter Icon" width={30} height={30}/>
//                 <text className='q-name'>จำนวนทวีตทั้งหมดที่เกี่ยวข้อง</text>

//                 {/* ดึงค่าจำนวนทวิตมาใส่ตรงนี้ */}
//                 <text className='quantity'>23,456 ทวีต</text>


//                 <img className='seen-icon' src={seen} alt="The most views count icon" width={64} height={64}/>
//                 <img className='retweet-icon' src={retweets} alt="The most views count icon" width={64} height={64}/>
//                 <img className='fav-icon' src={fav} alt="The most views count icon" width={64} height={64}/>
//                 <BsTriangleFill className='triangle' size={30} style={{color: "white" }}/>
//               </div>
//             </div>

//             <div className='tweet-data'>
//                 <div className='tweet-data-header'>
//                     <text className='tweet-data-title'>ทวีตที่มีการรีทวีตมากที่สุด</text>
//                     {/* ดึงจำนวนครั้งที่รีทวีตมากที่สุด */}
//                     <text className='tweet-data-bar'>|</text>
//                     <FaRetweet style={{color: "#00acee", opacity:0.7}}/>
//                     <text className='tweet-data-count'>189,072 ครั้ง</text>
//                 </div>

//                 <div className='tweet-data-user'> 
//                     {/* รูปภาพ + ชื่อ + tag user account */}
//                     <div className='user-icon'>
//                         <MdAccountCircle size={64}/>
//                     </div>

//                     <div className='user-info'>
//                         <text className='username'>ท่านผู้พัน</text>
//                         <text className='user-tag'>@FRYCHICK_LOVER</text>
//                     </div>
//                 </div>

//                 {/* content twitter */}
//                 <div className='tweet-content'>
//                     <text className='tweet-text'>ไก่ตัวแม่โดนทอด</text>
//                     <img className='tweet-image' src={noImage} alt="image" width={600} height={600}/>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default RetweetResult;