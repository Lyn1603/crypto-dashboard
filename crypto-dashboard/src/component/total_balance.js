import {Fragment} from 'react';
import BTC from '../assets/BTC.png';
import Group from '../assets/group.png';
import Portfolio from '../assets/portfolio.png';
import Funding from '../assets/Funding.png';
import P2P from '../assets/P2P.png';
import Assets from '../assets/Assets.png';
import Graphique from '../assets/graphique.png';




import '../css/total_balance.css';


const total_balance = () =>{
    return(
        <Fragment>
            <div className='Main'>
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
            <img src={Portfolio} alt="BTC"/>
            </div>

            <div>
            <img src={Funding} alt="BTC"/>
            </div>

            <div>
            <img src={Assets} alt="BTC"/>
            </div>
            <img src={P2P} alt="BTC"/>
            </div>     

        </div>
        <div>
        <img src={Graphique} alt="BTC"/>

        </div>

</div>
        </Fragment>
    )
}

export default total_balance