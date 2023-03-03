import React from "react";
import "./Boxe.css";
import planteee from '../img/planteee.png'


const Box = ({ title, name, city, date }) => {
    return (
        <div className="box"
            style={{
                width: "500px",
                height: "260px",
                border: "1px solid #975F5F",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "white",
                borderRadius: "10%",
            }}
        >
            <div className="box-content">
                <img src={planteee} alt="plant" className="box-image" />
                <h2>{title}</h2>
                <div className="box-text">
                    <p><b>Nom:</b> {name}</p><br />
                    <p><b>Ville:</b> {city}</p><br />
                    <p1><b>Date: {date}</b></p1>
                </div>
                <a href="http://localhost:3000/detaille"><button className="detail-button">Détails</button></a>
            </div>
        </div>
    );
};

export default Box;
