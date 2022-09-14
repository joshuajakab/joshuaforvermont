import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../media/Ferguson-for-Senate.svg';
import FB from '../../media/facebook.svg';
import Insta from '../../media/instagram.svg';
import './footer.css';

const Footer = props => {

    return(
        <div className='footer-container'>
            <img src={Logo} className='footer-logo' alt='footer-logo' />
            <div className='donation-container'>
                <div>
                <h2>Make a Donation!</h2>
                <a href='https://secure.actblue.com/donate/ferguson-for-senate'><Button><h1 className='donate-text'>Donate</h1></Button></a>
                </div>
                <div className='social-media-container'>
                    <h2>Follow on Social Media!</h2>
                    <div className='social-links-container'>
                        <a className='social-links' href='https://www.facebook.com/joshuaforvermont'><img src={FB}  alt='social-links' /></a> 
                        <a className='social-links' href='https://www.instagram.com/joshuaforvermont/'><img src={Insta}  alt='social-links' /></a> 
                    </div>
                </div>
            </div>
            <div className='paid-for-container'>
                <h2>Paid for by Joshua Ferguson for Vermont</h2>
            </div>
            <h3 className='tag'>Site by Give Me A Sign Designs LLC</h3>

        </div>
    )
};

export default Footer;
