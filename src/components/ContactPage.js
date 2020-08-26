import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import meeting from '../assets/meeting.png';

function ContactPage() {

    return (
        <div>
            <Navbar />

            <div className="container">
                <h1 className="center-align">REACH ME OUT.</h1>
                <div className="row">
                    <form className="col s12 l6">
                        <div className="input-field col s12">
                            <input id="first_name" type="text" required="required" />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="last_name" type="text" required="required" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="email" type="email" required="required" />
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="message" className="materialize-textarea"></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                        <div className="center-align">
                            <input type="submit" className="btn black" value="Send" />
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

export default ContactPage;