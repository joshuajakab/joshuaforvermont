import React from 'react';
import './contact.css';

const Contact = props => {

    return(
        <div className='contact-container'>
            <h2>Contact Us:</h2>
            <h3>Mail: Joshua Ferguson for Vermont<br />P.O. Box 14<br />Castleton, VT 05735</h3>
            <h3>Email: <a className='email-link' href='mailto: joshuaforvermont@gmail.com'>joshuaforvermont@gmail</a></h3>
            <h3>Center Street Office Party TBA<br />Downtown Rutland<br /><br />For more info on registering to vote, to meet the candidates, and to learn how to get involved pass by the Democratic Headquarters on 56 Strongs Avenue in Downtown Rutland.</h3>
        </div>
    )
};

export default Contact;
