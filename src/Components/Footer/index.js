import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../defaultComponents/Button';
import Logo from '../../media/Ferguson-for-Senate.svg';
import FB from '../../media/facebook.svg';
import Insta from '../../media/instagram.svg';
import './footer.css';

const Footer = props => {

    return (
        <div className='footer-container'>
            <img src={Logo} className='footer-logo' alt='footer-logo' />
            <div className='donation-container'>

                    <h2 className='donate-title'>To support Joshua Ferguson for Senate, donate now!</h2>
                    <a href='https://secure.actblue.com/donate/ferguson-for-senate'><Button className='footer-donate-button'>Donate</Button></a>
                    <h2 className='donate-title'>Contributions or gifts are not tax deductible</h2>
                
                
            </div>
            <div className='paid-for-container'>
            <div className='social-media-container'>
                    <h2 className='social-media-text'>Follow on Social Media!</h2>
                    <div className='social-links-container'>
                        <a className='social-links' href='https://www.facebook.com/joshuaforvermont'><img src={FB} alt='social-links' /></a>
                        <a className='social-links' href='https://www.instagram.com/joshuaforvermont/'><img src={Insta} alt='social-links' /></a>
                    </div>
                </div>
                
                <h3>Paid for by Joshua Ferguson for Vermont<br/>P.O. Box 14<br/>Castleton, VT 05735</h3>
            </div>
            <h3 className='tag'>Original landscape photography by Keith Edmunds | ©2022 Keith Edmunds Photography | <a href='https://www.keithedmunds.com/' className='photo-link'>keithedmunds.com</a></h3>
            <h3 className='tag'>Site by Give Me A Sign Designs LLC</h3>

        </div>
    )
};

export default Footer;
