import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './footer.css';

const Footer = props => {

    return(
        <div className='footer-container'>
            <div className='donation-container'>
                <h2>Make a Donation!</h2>
                <Button><h1 className='donate-text'>DONATE</h1></Button>
            </div>
            <div className='links'>
                <Link to='/privacy'><h3>Privacy Policy</h3></Link>
                <Link to='/contact'><h3>Contact</h3></Link>
            </div>
            <h3 className='tag'>Site by Give Me A Sign Designs LLC</h3>

        </div>
    )
};

export default Footer;
