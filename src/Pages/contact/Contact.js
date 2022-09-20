import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import "./Contact.css";

export default function Contact() {
    return (
        <ScrollableAnchor id={'contact'}>
            <div className="home-section">
                <div className="container">
                    <div className="row full-width contact-row">
                        <div className="contact-header">
                            <h1 className="contact-title">Contact</h1>
                        </div>
                        <div className="contact-form">
                            <form name="contact">
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="inputName">Name</label>
                                    <input type="text" name="name" className="form-control" id="inputName" placeholder="Name" required></input>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="inputEmail">Email</label>
                                    <input type="text" name="email" className="form-control" id="inputEmail" placeholder="Email" required></input>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="inputMessage">Message</label>
                                    <textarea name="message" className="form-control" id="inputMessage" placeholder="Message" rows='5' required></textarea>
                                </div>
                                <button type="submit" className="btn">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )
}