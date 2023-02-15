import {Fragment} from 'react';
import BTC from '../assets/BTC.png';
import '../css/total_balance.css';


const total_balance = () =>{
    return(
        <Fragment>
            <div className='text'>
            <h1> Total Balance </h1>
            </div>
        <div className='BTC'>
            <div className='img_balance'>
            <img src={BTC} alt="BTC"/>
        </div>
            <div className='navbar'>

            <div>
                <h1>Portofolio</h1>
            </div>

            <div>
               <h1>Funding</h1>
            </div>

            <div>
                <h1> Assets</h1>
            </div>

            <div>
                <h1>P2P</h1>
            </div>

            </div>
                



        </div>  
        </Fragment>
    )
}

export default total_balance