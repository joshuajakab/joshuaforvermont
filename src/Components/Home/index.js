import React from 'react';
import { useWindowWidthAndHeight } from '../../hooks/useWindow';
import './home.css';

const Home = props => {

    const [width] = useWindowWidthAndHeight();

    return(
        <div className='home-container'>
            <img className='home-img' src='https://drive.google.com/uc?id=1IjgxIitMSaRD3xJ2D0eKqJ_rWdw7DAyr' alt='football-pic' />
            <div className='divider' />
            <h1 className='quote-text'>"At every turn, let's ask: What can we do — what can I do — going forward?"</h1>
            <h1 className='quote-signature'>-Joshua Ferguson</h1>
            
            <div className='quote-img-container'>
                <img className='quote-img' src='https://drive.google.com/uc?id=1EWUPPPvC5tftXcDswtFt2OIppwQjPKT0' alt='quote-img' />
            </div>
            
            <div className='endorsement-container'>
                <h1 className='endorsement-title'>Endorsements</h1>
                <h3 className='endorsement-text'>Endorsed by Democrat, Republican, Progressive, and Independent voters.</h3>
                <div className='endorsement-img-container'>
                    <img src='https://drive.google.com/uc?id=129hM9R8PBY_facWfUzD4QqzY4NiW2IER' className='endorsement-img' alt='endorsement-img' />
                    <img src='https://drive.google.com/uc?id=1e-kPOQJ_NXU2hweGEsorEFTSthEwWXQB' className='endorsement-img' alt='endorsement-img' />
                </div>
            </div>

           
        </div>
    )
};

export default Home;
