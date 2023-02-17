import {Fragment} from 'react';
import BTC from '../assets/BTC.png';
import Group from '../assets/group.png';
import Portfolio from '../assets/portfolio.png';
import Funding from '../assets/Funding.png';
import P2P from '../assets/P2P.png';
import Assets from '../assets/Assets.png';
import Graphique from '../assets/graphique.png';
import Div_bitcoin from '../component/div_bitcoins.js';
import Div_etherium from '../component/div_etherium.js';
import '../css/total_balance.css';


const total_balance = () =>{
    return(
        <Fragment>

            <div className='Second_part'>
            <div className='sidebar'>
                <h1> Hi Roger ! </h1>
                <div className='SearchBar'>

                    <div className='search_content'>
                    <img src={Group} alt="BTC"/>
                        Search
                    </div>

                </div>
            </div>
           
            <h2> Total Balance </h2>
<div className='frame_balance'>
            <div className='img_balance'>
            <img src={BTC} alt="BTC"/>
            </div>
            
            

        <div className='menu2'>

            <div>
            <img  src={Portfolio} alt="Portfolio"/>
            </div>

            <div>
            <img  src={Funding} alt="Funding"/>
            </div>

            <div>
            <img  src={Assets} alt="Assets"/>
            </div>
            <img  src={P2P} alt="P2P"/>
            </div>     
        </div>

        <img className='graph' src={Graphique} alt="P2P"/>

        <div className='transactions'>
            <h3> Recent Transactions</h3>
            <h3 className='text1'> See all coins </h3>
        </div>

        <Div_bitcoin/>

        <Div_etherium/>

</div>
        </Fragment>
    )
}

export default total_balance