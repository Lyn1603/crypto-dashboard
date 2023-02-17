import {Fragment} from 'react';
import BNB from '../assets/BNB.png';
import '../css/recent_transaction.css';

const Div_USDC = () =>{
    return(
        <Fragment>
<div className='div_USDC'>

<img className='img_BNB' src={BNB} alt="Bitcoin"/>

    <div className='transcation_USDC'>
        <span className='span_24change6'> BNB</span>
        <span className='petit_span6'> Buy</span>
    </div>

    <div className='transcation_USDC'>
        <div className='BNB'>
        <span className='span_24change'>+ 0.7546</span>
        <span className='petit_span'> Today, 5:45 pm</span>
        </div>
    </div>


    </div>



        </Fragment>
    )
}

export default Div_USDC