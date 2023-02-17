import {Fragment} from 'react';
import BTC from '../assets/Bitcoin.png';
import '../css/recent_transaction.css';

const Div_USDC = () =>{
    return(
        <Fragment>
<div className='div_USDC'>

<img className='img_USDC' src={BTC} alt="Bitcoin"/>

    <div className='transcation_USDC'>
        <span> Bitcoin</span>
        <span className='petit_span'> Recieved</span>
    </div>

    <div className='transcation_USDC'>
            <span className='span_24change2'>+ 2.7546</span>
            <span className='petit_span2'> Today 8:55 am</span>
    </div>


    </div>



        </Fragment>
    )
}

export default Div_USDC