import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = props => {

    return(
        <div className='menu-container'>
            <Link className='menu-links' to='/about'><h2 className='menu-links-text' onClick={props.click}>Meet Joshua Ferguson</h2></Link>
            <Link className='menu-links' to='/Issues'><h2 onClick={props.click}>Issues</h2></Link>
            
            
            <Link className='menu-links' to ='/contact'><h2 className='menu-links-text' onClick={props.click}>Contact</h2></Link>
        </div>
    )
};

export default Menu;
