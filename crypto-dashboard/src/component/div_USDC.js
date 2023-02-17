import {Fragment} from 'react';
import USDC from '../assets/USDC.png';
import '../css/recent_transaction.css';

const Div_USDC = () =>{
    return(
        <Fragment>
<div className='div_USDC'>

<img className='img_USDC' src={USDC} alt="Bitcoin"/>

    <div className='transcation_USDC'>
        <span> Usdt</span>
        <span className='petit_span'> Recieved</span>
    </div>

    <div className='transcation_USDC'>
        <div className='USDC'>
        <span className='span_24change'>+$3,546</span>
        <span className='petit_span'> Today,13:45 pm</span>
        </div>
        
    </div>


    </div>



        </Fragment>
    )
}

export default Div_USDC