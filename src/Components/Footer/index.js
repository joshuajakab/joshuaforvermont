import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './footer.css';

const Footer = props => {

    return(
        <div className='footer-container'>
            <div className='donation-container'>
                <h2>Make a Donation!</h2>
                <a href='https://secure.actblue.com/donate/ferguson-for-senate'><Button><h1 className='donate-text'>DONATE</h1></Button></a>
            </div>
            <div className='paid-for-container'>
                <h2>Paid for by Joshua Ferguson for Vermont</h2>
            </div>
            <h3 className='tag'>Site by Give Me A Sign Designs LLC</h3>

        </div>
    )
};

export default Footer;
