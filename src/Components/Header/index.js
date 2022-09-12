import React from 'react';

import { useWindowWidthAndHeight } from '../../hooks/useWindow';
import './header.css';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Header = props => {

    const [width] = useWindowWidthAndHeight();

    return(
        <div className='phone-header-container'>
            <div className='logo-container'>
                {/*<Link to='/'><img src={Logo} className='logo' alt='logo' /></Link>*/}
                <Link className='logo-link' to='/'><h1 className='logo'>Joshua for Vermont</h1></Link>
            </div>
            {width < 925 ?
            <div className='menu' onClick={props.click}>
                <h2  className='menu-text'>MENU</h2>
            </div>
            :
            <div className='wide-menu'>
                <Link className='menu-links' to='/Issues'><h2 className='menu-links-text'>Issues</h2></Link>
                <Link className='menu-links' to='/about'><h2 className='menu-links-text' >About Joshua Ferguson</h2></Link>
                <Link className='menu-links' to='/contact'><h2 className='menu-links-text'>Contact</h2></Link>
                <a href='https://secure.actblue.com/donate/ferguson-for-senate'><Button className='donation-button'><h1 className='donation-button-text'>DONATE</h1></Button></a>
            </div>
            }
        </div>
    )
};

export default Header;
