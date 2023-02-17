import {Fragment} from 'react';
import Notif from '../assets/notif.png';
import Profile from '../assets/profile.png';
import Bitcoin_white from '../assets/Bitcoin_white.png';
import Etherium_icon from '../assets/Etherium_icon.png';
import Div_USDC from '../component/div_USDC.js';
import Div_BNB from '../component/div_BNB.js';
import Div_LiteCoin from '../component/div_LiteCoin.js';
import Div_BiteCoin from '../component/div_Bitcoin.js';
import Div_Eterium from '../component/div_Eterium.js';

import '../css/recent_transaction.css';

const recent_transaction = () =>{
    return(
        <Fragment>
        <div className='Third_part'>

        <div className='notification'>
            <img src={Notif} alt="Notif"/>
            <img src={Profile} alt="Profile"/>        
        </div>

        <h3 className='h3'> Recent Transactions</h3>

        <Div_USDC/>
        <Div_BNB/>
        <Div_LiteCoin/>
        <Div_BiteCoin/>
        <Div_Eterium/>

        <h3> Assets </h3>

        

        <div className='Assets_bitcoin'>
            <div className='column'>
            <img className='img' src={Bitcoin_white} alt="Bitcoin_icon"/>
            <span>Bitcion</span>       
            </div>
            <div className='row'>
            <h3>121,6450.45</h3> 
            <h3>BTC</h3> 
            </div>
        </div>

        <div className='Assets_etherium'>
            <div className='column'>
            <img className='img' src={Etherium_icon} alt="Etherium_icon"/>
            <span>Etherium</span>       
            </div>
            <div className='row'>
            <h3>143,850.45</h3> 
            <h3>ETH</h3> 
            </div>
        </div>


        </div>
        </Fragment>
    )
}

export default recent_transaction