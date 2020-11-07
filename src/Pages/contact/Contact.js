import React from "react";
import "./Contact.css";
import SocialMedia from "../../Components/social/Social";

export default function Contact() {
    return (
        <div className="main contact-margin-top" id="contact">
            <div className="contact-div-main">
                <div className="contact-header">
                    <h1 className="heading contact-title">Contact Me</h1>
                    <p className="subTitle contact-subtitle">Discuss a project or just want to say hi? My Inbox is open for all.</p>

                    <div className="contact-text-div">
                        <a className="contact-detail" href={"tel: +254727138659"}>+254727138659</a>
                        <br/><br/>
                        <a className="contact-detail-email"
                            href="mailto: derrick.korir@gmail.com">derrick.korir@gmail.com</a>
                        <br/><br/>
                        <SocialMedia/>
                    </div>
                </div>
                <div className="contact-image-div">
                    {/* <img alt="derrick working" src={image}></img> */}
                </div>
            </div>
        </div>
    )
}