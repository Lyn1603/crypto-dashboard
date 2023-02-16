import {Fragment} from 'react';
import Bitcoin from '../assets/Bitcoin.png';
import Zigzag1 from '../assets/zigzag1.png';
import '../css/total_balance.css';

const Div_bitcoin = () =>{
    return(
        <Fragment>
<div className='div_bitcoin'>

<img className='img_bitcoin' src={Bitcoin} alt="Bitcoin"/>

    <div className='transcation_bitcoin'>
        <span> Bitcoin</span>
        <span> BTC</span>
    </div>

    <div className='transcation_bitcoin'>
        <span> Market Cap</span>
        <span className='span_price'> $40,243.70</span>
    </div>

    <div className='transcation_bitcoin'>
        <span> 24h change</span>
        <span className='span_24change'> + 1,56</span>
    </div>

    <div className='transcation_bitcoin'>
        <img src={Zigzag1} alt="Zigzag"/>
    </div>

    <div className='transcation_bitcoin'>
        <h3>Trade</h3>
    </div>

    </div>



        </Fragment>
    )
}

export default Div_bitcoin