import {Fragment} from 'react';
import Mlogo from '../assets/Mlogo.png';
import Dashboard from '../assets/Dashboard.png'
import Invoices from '../assets/Invoices.png'
import Clients from '../assets/clients.png'
import Products from '../assets/product.png'
import Message from '../assets/message.png'
import Settings from '../assets/settings.png'
import Help from '../assets/help.png'


import '../css/header.css';

const Header = () =>{
    return(
        <Fragment>
        <div className='header'>
        <img src={Mlogo} alt="Logo" />
        <img className='Dashboard' src={Dashboard} alt="Dashboard" />
        <div>
        <img src={Invoices} alt="Logo" />
        <img src={Clients} alt="Logo" />
        <img src={Products} alt="Logo" />
        <img src={Message} alt="Logo" />
        <img src={Settings} alt="Logo" />
        <img src={Help} alt="Logo" />
        </div>
        </div>
        </Fragment>
    )
}

export default Header