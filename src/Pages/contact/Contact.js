import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import "./Contact.css";

export default function Contact() {
    return (
        <ScrollableAnchor id={'contact'}>
            <div className="home-section">
                    <div className="contact-info">
                        <div className="contact-header">
                            <h3>&lt;Contact&gt;</h3>
                            <p className="info-text">Just give me a message whenever and however <br/>
                                you want and we will start our cooperation.
                            </p>
                            <p className="info-text">
                                MY PHONE: <br/>
                                +254 727 138 659
                            </p>
                            <p className="info-text">
                                EMAIL: <br/>
                                derrick.korir@gmail.com
                            </p>
                        </div>
                        <div className="contact-form">
                            <form className="form-contact" name="contact">
                                    <input type="text" name="name" className="form-control" id="inputName" placeholder="NAME" required></input>
                                    <input type="text" name="email" className="form-control" id="inputEmail" placeholder="EMAIL" required></input>
                                    <textarea name="message" className="form-control" id="inputMessage" placeholder="Your message" rows='10' required></textarea><br/>
                                    <button type="submit" className="button">Send</button>
                            </form>
                        </div>
                    </div>
            </div>
        </ScrollableAnchor>
    )
}