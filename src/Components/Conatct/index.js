import React from 'react';
import Circle from '../../media/circle.JPG';
import './contact.css';

const Contact = props => {

    return (
        <div className='contact-container'>
            <div className='contact-img-container'>
                <img src={Circle} className='contact-img' alt='contact-img' />
            </div>
            <h2>Contact</h2>
            <h3>Please mail donations payable to:</h3>
            <h3>Joshua Ferguson for Vermont<br />P.O. Box 14<br />Castleton, VT 05735</h3>
            <h3>Email: <a className='email-link' href='mailto: joshuaforvermont@gmail.com'>joshuaforvermont@gmail</a></h3>
            <h3>Center Street Office Party TBA<br />Downtown Rutland<br /><br />For more info on registering to vote, to meet the candidates, and to learn how to get involved pass by the Democratic Headquarters on 56 Strongs Avenue in Downtown Rutland.</h3>
        </div>
    )
};

export default Contact;
