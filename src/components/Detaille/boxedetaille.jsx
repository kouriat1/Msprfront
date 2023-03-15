import React, { useState } from "react";
import "./boxedetaille.css";
import planteee from '../img/planteee.png'

const Box = ({ title, name, city, description, date, ownerPhoneNumber = "(+33)73456789" }) => {
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);

    const handleContactClick = () => {
        setShowPhoneNumber(true);
    };
    const handleReserveClick = () => {
        const plantName = title;
        const confirmationMessage = `La plante "${plantName}" a été réservée.`;
        window.alert(confirmationMessage);
    }

    return (
        <div className="image_detaille">
            <img src={planteee} alt="plant" className="box-image" />
            <div
                className="box_detaille"
                style={{
                    position: "relative",
                    border: "1px solid #975F5F",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundColor: "white",
                    borderRadius: "5%",
                    width: "490px",
                    height: "340px",
                }}
            >
                <div className="box_content_detaille">
                    <h2>{title}</h2>
                    <div className="box_button">
                        <div className="box_text_detaille">
                            <p>
                                <b>Nom:</b> {name}
                            </p>
                            <p>
                                <b>Ville:</b> {city}
                            </p>
                            <p>
                                <b>Description:</b> {description}
                            </p>
                            <br />
                            <p style={{ textAlign: "center" }}>
                                <b>Date: {date}</b>
                            </p>
                        </div>
                        {showPhoneNumber ? (
                            <p className="owner_phone_number">{ownerPhoneNumber}</p>
                        ) : (
                            <button className="contact_button" onClick={handleContactClick}>
                                Contacter
                            </button>
                        )}
                    </div>
                    <button className="reserve_button" onClick={handleReserveClick}>Réserver</button>
                </div>
            </div>
        </div>
    );
};

export default Box;
