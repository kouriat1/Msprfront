import React from "react";
import "./boxedetaille.css";
import planteee from '../img/planteee.png'


const Box = ({ title, name, city, description, date }) => {
    return (
        <div className="image_detaille">
            <img src={planteee} alt="plant" className="box-image" />
            <div className="box_detaille"
                style={{
                    position: "relative",
                    backgroundColor: "#f7f7f7",
                    border: "1px solid #975F5F",
                    borderRadius: "5px",
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
                            <p ><b>Nom:</b> {name}</p>
                            <p><b>Ville:</b> {city}</p>
                            <p><b>Description:</b> {description}</p><br />
                            <p style={{ textAlign: "center" }}><b>Date: {date}</b></p>
                        </div>
                        <button className="reserve_button">Réserver</button>
                    </div>
                    <button className="contact_button">Contacter</button>
                </div>
            </div>
        </div>
    );
};

export default Box;
