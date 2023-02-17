import {Fragment} from 'react';
import Mlogo from '../assets/Mlogo.png';
import Dashboard from '../assets/Dashboard.png'
import Invoices from '../assets/Invoices.png'
import Clients from '../assets/clients.png'
import Products from '../assets/product.png'
import Message from '../assets/message.png'
import Settings from '../assets/settings.png'
import Help from '../assets/help.png'
import logout from '../assets/logout.png';
import '../css/header.css';

const Header = () =>{
    return(
        <Fragment>
        <div className='header'>
        <img src={Mlogo} alt="Logo" />
        <img className='Dashboard' src={Dashboard} alt="Dashboard" />
            <div className='menu'>
            <img src={Invoices} alt="Logo" />
            <img src={Clients} alt="Client" />
            <img className='product' src={Products} alt="Product" />
            <img className='message' src={Message} alt="Message" />
            <img src={Settings} alt="Settings" />
            <img src={Help} alt="Help" />
            </div> 
            <img className='logout' src={logout} alt="logout" />

        </div>



        </Fragment>
    )
}

export default Header