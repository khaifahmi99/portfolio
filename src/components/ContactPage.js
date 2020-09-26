import React from 'react';
import { useState } from 'react';

import Typing from 'react-typing-animation';

import Navbar from './Navbar';
import Footer from './Footer';

import meeting from '../assets/meeting.png';

import db from './Firebase/firebase';

function ContactPage() {
    const [contactForm, updateContactForm] = useState({
        firstName: '', lastName: '', email: '', message: '', formType: 'notComplete'
    })

    async function handleSubmit(e) {
        e.persist();
        try {
            await db.collection('contact').doc().set(contactForm);
            updateContactForm({...contactForm, formType: 'complete'})
        } catch (err) {
            console.log('Contact Page: DB Update Fail')
        } 
    }

    function handleChange(e) {
        console.log(updateContactForm)
        e.persist()
        updateContactForm({...contactForm, [e.target.name]: e.target.value})
    }

    const { formType } = contactForm;

    if (formType === 'notComplete') {
        return (
            <div>
                <Navbar />
    
                <div className="container">
                        <Typing startDelay={400} speed={80}>
                            <h1 className="center-align">
                                REACH ME OUT.
                                <Typing.Delay ms={1000} />
                                <Typing.Backspace count={6} />
                                E OUT.
                                <Typing.Delay ms={1000000000} />
                            </h1>
                        </Typing>
                    <div className="row">
                        <form className="col s12 l6">
                            <div className="input-field col s12">
                                <input onChange={handleChange} name="firstName" id="firstName" type="text" required="required" />
                                <label htmlFor="firstName">First Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={handleChange} name="lastName" id="lastName" type="text" required="required" />
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={handleChange} name="email" id="email" type="email" required="required" />
                                <label htmlFor="email">Email Address</label>
                            </div>
                            <div className="input-field col s12">
                                <textarea onChange={handleChange} name="message" id="message" className="materialize-textarea"></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                            <div className="center-align">
                                <input onClick={handleSubmit} className="btn black hoverable" value="Send" />
                            </div>
                        </form>
                        <div className="col s12 l6 center-align hide-on-med-and-down">
                            <br/>
                            <br/>
                            <img src={meeting} className="responsive-img" alt="conversation logo"/>
                            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        </div>
                    </div>
                    <br/>
                    <div className="wrapper">
                        <span className="divider-text">OR</span>
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col s8 l6 offset-s2 offset-l3">
                            <h5 className="center-align">I can also be reach by these platforms</h5>
                        </div>
                        <div className="col s10 l6 offset-l3 offset-s1 center-align">
                            {/* <p>I can also be reached from any other platform. I can be reached via phone at +61401043474 or my personal email at khaifahmi99@gmail.com. Alternatively, I can be reached via LinkedIn. Let it be to connect, having enquiries, sharing stories, or anything else, do not hesitate and feel free to reach me out.</p> */}
                            <p>
                                <a href="https://www.linkedin.com/in/khaifahmi/" style={{display: "block"}} className="btn black hoverable waves-effect waves-light"><i className="fa fa-linkedin fa-lg left" aria-hidden="true"></i>LinkedIn</a>
                            </p>
                            <p>
                                <a href="#" style={{display: "block"}} className="btn black hoverable waves-effect waves-light"><i className="fa fa-phone fa-lg left" aria-hidden="true"></i>0401043474</a>
                            </p>
                            <p>
                                <a href="#" style={{display: "block"}} className="btn black hoverable waves-effect waves-light"><i className="fa fa-envelope fa-lg left" aria-hidden="true"></i>khaifahmi99@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <br/>
                </div>
    
                <Footer />
            </div>
        )
    } else if (formType === 'complete') {
        return (
            <div>
                <Navbar />
    
                <div className="container">
                    <h1 className="center-align">REACH ME OUT.</h1>
                    <div className="row">
                        <div className="col s12 l6 center-align">
                            <h2>Your message has been sent.</h2>
                            <p>I will definitely come back to your question by your email</p>
                        </div>
                        <div className="col s12 l6 center-align hide-on-med-and-down">
                            <br/>
                            <br/>
                            <img src={meeting} className="responsive-img" alt="conversation logo"/>
                            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        </div>
                    </div>
                    <br/>
                    <div className="wrapper">
                        <span className="divider-text">OR</span>
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col s12 l6 offset-l3">
                            <p>I can also be reached from any other platform. I can be reached via phone at +61401043474 or my personal email at khaifahmi99@gmail.com. Alternatively, I can be reached via LinkedIn. Let it be to connect, having enquiries, sharing stories, or anything else, do not hesitate and feel free to reach me out.</p>
                        </div>
                    </div>
                    <br/>
                </div>
    
                <Footer />
            </div>
        )    
    }
}

export default ContactPage;