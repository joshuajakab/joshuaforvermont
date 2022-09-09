import React from 'react';
import { useWindowWidthAndHeight } from '../../hooks/useWindow';
import './home.css';

const Home = props => {

    const [width] = useWindowWidthAndHeight();

    return(
        <div className='home-container'>
            <img className='home-img' src='https://drive.google.com/uc?id=1PbU4z9_AD5AmfnFQ9AiXgInhf38gSFkV' alt='football-pic' />
            <div className='divider' />
            <h1 className='quote-text'>"Some real inspirational shit about some real salt of the earth inspirational people that will for sure touch your hearts."</h1>
            <h1 className='quote-signature'>-Joshua Ferguson</h1>
            {width < 925 ?
            <div className='quote-img-container'>
                <img className='quote-img' src='https://drive.google.com/uc?id=1EWUPPPvC5tftXcDswtFt2OIppwQjPKT0' alt='quote-img' />
            </div>
            :
            <div className='quote-img-container'>
                <img className='quote-img' src='https://drive.google.com/uc?id=17IQCIWFRW-GL8LDRhjnuWwgV63YhSxYX' alt='quote-img' />
            </div>
            }
           
        </div>
    )
};

export default Home;
