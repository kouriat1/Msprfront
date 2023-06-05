import React, { useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Acceuil.css";

const Accueil = () => {
    const [showMessage, setShowMessage] = useState(true);
    const [accepted, setAccepted] = useState(false);

    function handleAccept() {
        setAccepted(true);
        setShowMessage(false);
    }

    function handleDecline() {
        setAccepted(false);
        setShowMessage(false);
    }

    async function returnUsers() {
        const response = await axios.get("http://localhost:3005/users/all");
        return response
    }

    return (
        <div className="homepage">
            {showMessage && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Nous utilisons des cookies afin d'améliorer votre expérience sur notre application. Ces derniers peuvent contenir des informations personnelles.</p>
                        <button onClick={handleAccept} className="acceptbutton">Accepter</button>
                        <button onClick={handleDecline} className="refusbutton">Refuser</button>
                    </div>
                </div>
            )}
            <div className={showMessage ? "blur" : ""}>
                <Header />
                <div className="homepage-container">
                    <h1>Bienvenue sur A-rosaje</h1>
                    <p>Nous aidons les amoureux des plantes à garder et à échanger leurs plantes.</p>
                    <div className="button-container">
                        <Link to="/shop">
                            <button className="shop-button">Découvrir notre application</button>
                        </Link>
                    </div>
                </div>
            </div>
            <p>{ this.returnUsers() }</p>
        </div>
    );
};

export default Accueil;