import {Fragment} from 'react';
import LiteCoin from '../assets/LiteCoin.png';
import '../css/recent_transaction.css';

const Div_USDC = () =>{
    return(
        <Fragment>
<div className='div_USDC'>

<img className='img_LiteCoin' src={LiteCoin} alt="Bitcoin"/>

    <div className='transcation_USDC'>
        <span className='span_24change5'> LiteCoin</span>
        <span className='petit_span5'> Withdrawal</span>
    </div>

    <div className='transcation_USDC'>
        <div className='LiteCoin'>
        <span className='span_24change3'>+ 0.7546</span>
        <span className='petit_span'>Today 7:55 am</span>
        </div>
       
    </div>


    </div>



        </Fragment>
    )
}

export default Div_USDC