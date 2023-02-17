import {Fragment} from 'react';
import Eterium from '../assets/Etherium_icon.png';
import '../css/recent_transaction.css';

const Div_USDC = () =>{
    return(
        <Fragment>
<div className='div_USDC'>

<img className='img_Eterium' src={Eterium} alt="Bitcoin"/>

    <div className='transcation_USDC'>
        <span className='span_24change4'> Etherium</span>
        <span className='petit_span'> Recieved</span>
    </div>

    <div className='transcation_USDC'>
        <div className='Eterium'>
            <span className='span_24change'>+ 1.646</span>
            <span className='petit_span'> Today 10:02 am</span>
        </div>
        
    </div>


    </div>



        </Fragment>
    )
}

export default Div_USDC