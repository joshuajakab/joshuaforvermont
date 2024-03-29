import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useWindowWidthAndHeight } from '../../hooks/useWindow';
import './home.css';
import FormInput from '../defaultComponents/Input';
import TextArea from '../defaultComponents/Textarea';
import Button from '../defaultComponents/Button';
import { apiInstance } from '../../Utils';
import StandTall from '../../media/stand-tall.png';
import Walking from '../../media/walking.png';
import AFT from '../../media/AFT.png';
import LGK from '../../media/LGK.jpg';
import VCV from '../../media/VCV.jpg';
import Divider from '../../media/divider.jpg';



const Home = props => {

    const [width] = useWindowWidthAndHeight();

    const [mouseOver, setMouseOver] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [source, setSource] = useState(StandTall)

    //'https://drive.google.com/uc?id=1ypV8kOFUQZYtFjaFVewIgaI67BpRkQ9M'
    const changeHomeImage = () => {
        setSource(Walking)
    }

    const changeBack = () => {
        setSource(StandTall)
    }

    const resetContactForm = () => {
        setEmail('');
        setName('');
        setMessage('');
        setZipCode('');
    }

    const sendContactEmail = (e, errors) => {
        e.preventDefault();

        if (errors) {
            alert('error')
            return
        }

        apiInstance.post('/access', { contactEmail: email, contactName: name, contactMessage: message, contactZipCode: zipCode })
        //showLoader()
        resetContactForm()

    }

    return (
        <div className='home-container'>

            {width < 925 ?
                <div className='home-img-container'>
                    

                        <div className='home-img-phone'>
                            <img className='home-img-1'  src={StandTall} alt='home-1' />
                        </div>

                    <div className='home-form'>
                        <div className='home-form-container'>
                            <div id='quote-text-container'>
                                <h1 className='quote-text'>Always for Vermont.</h1>
                            </div>
                            <FormInput
                                className='home-form-input'
                                label='Email'
                                type='email'
                                value={email}
                                handleChange={e => setEmail(e.target.value)}
                            />
                            <div className='home-form-sub'>
                                <FormInput
                                    className='home-form-input-sub'
                                    label='Name'
                                    type='text'
                                    value={name}
                                    handleChange={e => setName(e.target.value)}
                                />
                                <FormInput
                                    className='home-form-input-sub-2'
                                    label='ZIP Code'
                                    type='text'
                                    value={zipCode}
                                    handleChange={e => setZipCode(e.target.value)}
                                />
                            </div>
                            <TextArea
                                className='home-form-text-input'
                                label='Message'
                                type='text'
                                value={message}
                                handleChange={e => setMessage(e.target.value)}
                            />
                            <Button id='home-form-submit' onClick={sendContactEmail}>Send</Button>
                        </div>
                    </div>




                    {/*mouseOver &&
                    <div className='home-img-container'>
                        <img onMouseOver={changeHomeImage} className='home-img' src='https://drive.google.com/uc?id=12hC4BFBeh_Izvst6CgcsT7FXBpIt7b3o' alt='home-img' />
                    </div>
            */}



                </div>

                :

                <div className='home-img-container'>
                    <div className='home-form'>
                        <div >
                            <h1 className='quote-text'>Always for Vermont.</h1>
                        </div>
                        <FormInput
                            className='home-form-input'
                            label='Email'
                            type='email'
                            value={email}
                            handleChange={e => setEmail(e.target.value)}
                        />
                        <div className='home-form-sub'>
                            <FormInput
                                className='home-form-input-sub'
                                label='Name'
                                type='text'
                                value={name}
                                handleChange={e => setName(e.target.value)}
                            />
                            <FormInput
                                className='home-form-input-sub-2'
                                label='ZIP Code'
                                type='text'
                                value={zipCode}
                                handleChange={e => setZipCode(e.target.value)}
                            />
                        </div>
                        <TextArea
                            className='home-form-text-input'
                            label='Message'
                            type='text'
                            value={message}
                            handleChange={e => setMessage(e.target.value)}
                        />
                        <Button id='home-form-submit'>Send</Button>

                    </div>


                    <img className='home-img' src={source} alt='home-img' onMouseEnter={changeHomeImage} onMouseLeave={changeBack} />

                    {/*mouseOver &&
                        <div className='home-img-container'>
                            <img onMouseOver={changeHomeImage} className='home-img' src='https://drive.google.com/uc?id=12hC4BFBeh_Izvst6CgcsT7FXBpIt7b3o' alt='home-img' />
                        </div>
                */}



                </div>
            }


            {/*mouseOver &&
                <div className='home-img-container'>
                    <img onMouseOver={changeHomeImage} className='home-img' src='https://drive.google.com/uc?id=12hC4BFBeh_Izvst6CgcsT7FXBpIt7b3o' alt='home-img' />
                </div>
    */}
            {/*<Carousel dynamicHeight={true} autoPlay={true} infiniteLoop={true} interval='8000' showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}> 
                <div className='home-img-container'>
                    <img src='https://drive.google.com/uc?id=1VhJM3zL5mzz7_cZz6k9pdh44yv-lyoy_' alt='home-1' />
                </div>
                
                <div className='home-img-container'>
                    <img src='https://drive.google.com/uc?id=1CdvqIStciARpUM5i7rH1JfFcKZEIPZni' alt='home-3' />
                </div>
                <div className='home-img-container'>
                    <img src='https://drive.google.com/uc?id=1jHQR61zqr6yyQtrHMBfj7KCZpnxORb69' alt='home-4' />
                </div>
            </Carousel> */}
            <div className='divider'>
                <img className='divider-img' src={Divider} alt='divider' />
            </div>

            {/*<h1 className='quote-text'>"At every turn, let's ask: What can we do — what can I do — going forward?"</h1>
            <h1 className='quote-signature'>-Joshua Ferguson</h1>

            <div className='quote-img-container'>
                <img className='quote-img' src='https://drive.google.com/uc?id=1EWUPPPvC5tftXcDswtFt2OIppwQjPKT0' alt='quote-img' />
            </div>
            */}
            <div className='endorsement-container'>
                <h1 className='endorsement-title'>Endorsements</h1>
                <h3 className='endorsement-text'>Endorsed by Democrat, Republican, Progressive, and Independent voters.</h3>
                <div className='endorsement-img-container'>
                
                    <img src={AFT} className='endorsement-img' alt='endorsement-img' />
                    <img src={LGK} className='endorsement-img' alt='endorsement-img' />
                    <img src={VCV} className='endorsement-img' alt='endorsement-img' />
                </div>
            </div>


        </div>
    )
};

export default Home;
