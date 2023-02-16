import {Fragment} from 'react';
import Etherium from '../assets/Etherium.png';
import Zigzag2 from '../assets/zigzag2.png';
import '../css/total_balance.css';

const Div_bitcoin = () =>{
    return(
        <Fragment>
<div className='div_etherium'>

<img className='img_bitcoin' src={Etherium} alt="Bitcoin"/>

    <div className='transcation_bitcoin'>
        <span> Etherium</span>
        <span> ETH</span>
    </div>

    <div className='transcation_bitcoin'>
        <span> Market Cap</span>
        <span className='span_price1'> $40,243.70</span>
    </div>

    <div className='transcation_bitcoin'>
        <span> 24h change</span>
        <span className='span_24change1'> +1,56</span>
    </div>

    <div className='transcation_bitcoin'>
        <img src={Zigzag2} alt="Zigzag"/>
    </div>

    <div className='transcation_bitcoin'>
        <h3>Trade</h3>
    </div>

    </div>



        </Fragment>
    )
}

export default Div_bitcoin