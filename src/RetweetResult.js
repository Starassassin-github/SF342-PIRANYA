import React from 'react';
import { ReactComponentElement } from 'react';
import { ReactDOM } from 'react';
import './Result.css';
import logo from './asset/logo.svg';
import backIcon from './asset/back button.png';
import fav from './asset/fav (unclick).png';
import retweet from './asset/retweet.png';
import search from './asset/search button.png';
import seen from './asset/seen (unclick).png';
import twitter from './asset/twitter.png';

function RetweetResult(){
    return(
        <div className='container'>
            <div className='head'>
                <div className='header'>
                  <img className='back-icon' src={backIcon} alt="Back Icon" width={27} height={27}/>
                  <img className='logo' src={logo} alt="logo" width={143} height={29}/>
                </div>

            <div className='header-body'>
                <text className='keyword-title'>คีย์เวิร์ด :</text>
                {/* ดึงคำจาก keyword มาเปลี่ยนตรงนี้ */}
                <text className='keyword'>ไก่ทอด</text>

                <img className='twitter' src={twitter} alt="Twitter Icon" width={30} height={30}/>
                <text className='q-name'>จำนวนทวีตทั้งหมดที่เกี่ยวข้อง</text>

                {/* ดึงค่าจำนวนทวิตมาใส่ตรงนี้ */}
                <text className='quantity'>23,456 ทวีต</text>


                <img className='seen-icon' src={seen} alt="The most views count icon" width={64} height={64}/>
                <img className='retweet-icon' src={retweet} alt="The most views count icon" width={64} height={64}/>
                <img className='fav-icon' src={fav} alt="The most views count icon" width={64} height={64}/>
              
              </div>
            </div>
        </div>
    );
}


export default RetweetResult;