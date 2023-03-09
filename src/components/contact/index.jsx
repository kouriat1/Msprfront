import React from "react";
import Header from "../Header";
import "./contact.css";
import nature2 from '../img/nature2.png';
import fb from '../img/facebook.png';
import insta from '../img/instagram.png';
import twit from '../img/twitter.png';



const Contact = () => {
    return (
        <div>
            <Header />
            <div className="contact-page">
                <p className="contact-text">
                    Pour toute question ou problème, <br />n'hésitez pas à contacter notre support
                    en remplissant le formulaire :
                </p>
                <div className="contact-image">
                    <img src={nature2} alt="arbre image" />
                </div>
                <div className="social-icons">
                    <p>Suivez-nous : &nbsp; </p>
                    <br /><a href="https://www.facebook.com"><img src={fb} alt="Facebook icon" /></a>
                    <a href="https://www.twitter.com"><img src={insta} alt="Twitter icon" /></a>
                    <a href="https://www.instagram.com"><img src={twit} alt="Instagram icon" /></a>
                </div>
                <div className="contact-container">
                    <div className="contact-text-container">
                        <h1>Contactez-nous</h1>
                        <form className="contact-form">
                            <label htmlFor="name">Nom :</label>
                            <input type="text" id="name" name="name" />

                            <label htmlFor="email">E-mail :</label>
                            <input type="email" id="email" name="email" />

                            <label htmlFor="message">Message :</label>
                            <textarea id="message" name="message"></textarea>

                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
