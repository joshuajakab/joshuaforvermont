import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useWindowWidthAndHeight } from '../../hooks/useWindow';
import './home.css';

const Home = props => {

    const [width] = useWindowWidthAndHeight();

    return (
        <div className='home-container'>

            <Carousel dynamicHeight={true} autoPlay={true} infiniteLoop={true} interval='8000' showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}> 
                <div className='gig-img-container'>
                    <img src='https://drive.google.com/uc?id=1VhJM3zL5mzz7_cZz6k9pdh44yv-lyoy_' alt='home-1' />
                </div>
                <div className='gig-img-container'>
                    <img src='https://drive.google.com/uc?id=1k2AyCM4K-uhckgC6riOKX5z9Cnt6GAoY' alt='home-2' />
                </div>
                <div className='gig-img-container'>
                    <img src='https://drive.google.com/uc?id=1CdvqIStciARpUM5i7rH1JfFcKZEIPZni' alt='home-3' />
                </div>
                <div className='gig-img-container'>
                    <img src='https://drive.google.com/uc?id=1jHQR61zqr6yyQtrHMBfj7KCZpnxORb69' alt='home-4' />
                </div>
            </Carousel>
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
                    <img src='https://drive.google.com/uc?id=1NkfGsZDWbhBisbj0UquF0QVQT2C1-fEG' className='endorsement-img' alt='endorsement-img' />
                    <img src='https://drive.google.com/uc?id=1e-kPOQJ_NXU2hweGEsorEFTSthEwWXQB' className='endorsement-img' alt='endorsement-img' />
                </div>
            </div>


        </div>
    )
};

export default Home;
