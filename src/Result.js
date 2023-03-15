import './Result.css';
import logo from './asset/logo.svg';
import backIcon from './asset/back button.png';
import likes from './asset/likes.png';
import retweets from './asset/retweets.png';
import search from './asset/search button.png';
import views from './asset/view count.png';

function Result(){
    return(
        <div className='container'>
            <div className='head'>
                <div className='header'>
                    <img src={logo} alt="logo" width={213} height={36}/>
                </div>
            </div>
        </div>
    );
}


export default Result;