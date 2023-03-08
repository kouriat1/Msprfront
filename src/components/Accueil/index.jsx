import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import "./Acceuil.css";

const Accueil = () => {
    return (
        <div>
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
    );
};

export default Accueil; 