import React from 'react';
import Logo from '../../media/Ferguson-for-Senate.svg';
import { useWindowWidthAndHeight } from '../../hooks/useWindow';
import './header.css';
import { Link } from 'react-router-dom';
import Button from '../defaultComponents/Button';

const Header = props => {

    const [width] = useWindowWidthAndHeight();

    return(
        <div className='phone-header-container'>
            <div className='logo-container'>
                <Link className='logo' to='/'><img src={Logo}  alt='logo' /></Link>
                {/*<Link className='logo-link' to='/'><h1 className='logo'>Joshua for Vermont</h1></Link>*/}
            </div>
            {width < 925 ?
            <div className='menu' onClick={props.click}>
                <h2  className='menu-text'>MENU</h2>
            </div>
            :
            <div className='wide-menu'>
                <Link className='wide-menu-links' to='/about'><h2 className='menu-links-text' >Meet Joshua Ferguson</h2></Link>
                <Link className='wide-menu-links' to='/Issues'><h2 className='menu-links-text'>Issues</h2></Link>
                
                <Link className='wide-menu-links' to='/contact'><h2 className='menu-links-text'>Contact</h2></Link>
                <a className='wide-menu-links' href='https://secure.actblue.com/donate/ferguson-for-senate'><Button id='donation-button'>Donate</Button></a>
            </div>
            }
        </div>
    )
};

export default Header;
