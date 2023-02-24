import React from "react";
import "./Boxe.css";
import planteee from '../img/planteee.png'


const Box = ({ title, name, city, date }) => {
    return (
        <div className="box"
            style={{
                width: "500px",
                height: "300px",
                backgroundColor: "#f7f7f7",
                border: "1px solid #975F5F",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "white",
                borderRadius: "10%",
                width: "480px",
                height: "260px"
            }}
        >
            <h2>{title}</h2>
            <div className="box-content">
                <img src={planteee} alt="plant" className="box-image" />
                <div className="box-text">
                    <p><b>Nom:</b> {name}</p>
                    <p><b>Ville:</b> {city}</p>
                    <p><b>Date:</b> {date}</p>
                </div>
            </div>
        </div>
    );
};

export default Box;
