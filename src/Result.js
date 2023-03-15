import './Result.css';
import logo from './assets/logo.svg';

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