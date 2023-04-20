import React, { useState } from 'react';
import Circle from '../../media/circle.JPG';
import FormInput from '../defaultComponents/Input';
import TextArea from '../defaultComponents/Textarea';
import Button from '../defaultComponents/Button';
import { apiInstance } from '../../Utils';
import './contact.css';

const Contact = props => {

    const [name, setName] = useState('');
    const [orginization, setOrginization] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');

    
    const resetScheduleForm = () => {
        setEmail('');
        setName('');
        setOrginization('');
        setPhone('');
        setDate('');
        setTime('');
        setAddress('');
        setNotes('');
    }

    const sendScheduleEmail = (e, errors) => {
        e.preventDefault();

        if (errors) {
            alert('error')
            return
        }

        apiInstance.post('/schedule', { contactEmail: email, contactName: name, orginization: orginization, contactPhone: phone, date: date, time: time, address: address, notes: notes })
        //showLoader()
        resetScheduleForm()

    }



    return (
        <div className='contact-container'>
            <div className='contact-img-container'>
                <div id='circle-container'>
                    <img src={Circle} className='contact-img' alt='contact-img' />
                </div>
                <div className='contact-form'>
                    <h1 id='contact-form-title'>Schedule a Speaking Event</h1>
                    <h3 id='contact-form-subtitle'>(Request a visit to your orginization, home or commuity. Host a coffee hour, town hall or special event.)</h3>
                    <FormInput
                        className='contact-form-input'
                        label='Full Name'
                        type='text'
                        value={name}
                        handleChange={e => setName(e.target.value)}
                    />

                    <FormInput
                        className='contact-form-input'
                        label='Orginization (if applicable)'
                        type='text'
                        value={orginization}
                        handleChange={e => setOrginization(e.target.value)}
                    />

                    <FormInput
                        className='contact-form-input'
                        label='Email'
                        type='email'
                        value={email}
                        handleChange={e => setEmail(e.target.value)}
                    />

                    <FormInput
                        className='contact-form-input'
                        label='Phone'
                        type='text'
                        value={phone}
                        handleChange={e => setPhone(e.target.value)}
                    />
                    <div id='contact-form-sub'>
                        <FormInput
                            className='contact-form-input'
                            id='contact-form-input-sub-1'
                            label='Event Date'
                            type='text'
                            value={date}
                            handleChange={e => setDate(e.target.value)}
                        />

                        <FormInput
                            className='contact-form-input'
                            id='contact-form-input-sub-2'
                            label='Event Time'
                            type='text'
                            value={time}
                            handleChange={e => setTime(e.target.value)}
                        />
                    </div>

                    <FormInput
                        className='contact-form-input'
                        label='Event Address'
                        type='text'
                        value={address}
                        handleChange={e => setAddress(e.target.value)}
                    />

                    <TextArea
                        className='contact-form-text'
                        label='Special Notes (key people, estimated attendance, admission)'
                        type='text'
                        value={notes}
                        handleChange={e => setNotes(e.target.value)}
                    />

                    <Button id='contact-form-submit' onClick={sendScheduleEmail}>Send</Button>

                </div>
            </div>
            <h2>Contact</h2>
            <h3>Please mail donations payable to:</h3>
            <h3>Joshua Ferguson for Vermont<br />P.O. Box 14<br />Castleton, VT 05735</h3>
            <h3>Email: <a className='email-link' href='mailto: joshuaforvermont@gmail.com'>joshuaforvermont@gmail</a></h3>
            <h3>For more info on registering to vote, to meet the candidates, and to learn how to get involved, visit <a className='email-link' href='https://www.vtdemocrats.org/'>www.vtdemocrats.org</a></h3>
        </div>
    )
};

export default Contact;
