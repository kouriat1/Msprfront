import React from "react";
import Header from "../Header";
import "./mes_plantes.css";
import plante1 from '../img/plante1.jpeg'
import plante2 from '../img/plante2.jpg'


const Plantes = () => {
    return (
        <div>
            <Header />
            <div className="mes_plantes">
                <h1><b>Mes Plantes</b></h1><br />
                <img src={plante1} alt="plante1" />
                <div className="boxe_plante" style={{
                    width: "430px",
                    height: "200px",
                    backgroundColor: "#f7f7f7",
                    border: "1px solid #975F5F",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "10%",
                }}>
                    <div className="contenu">
                        <h1> Plante Turnosole</h1>
                        <div className="text_info">
                            <p><b>Nom:</b> Turnosole</p><br />
                            <p><b>Ville:</b> paris</p><br />
                            <p1><b>Date: From 02/04/23 to 01/05/23</b></p1>
                        </div>
                    </div>
                </div>
                <img className="plante2" src={plante2} alt="plante2" />
                <div className="boxe_plante2" style={{
                    width: "430px",
                    height: "200px",
                    backgroundColor: "#f7f7f7",
                    border: "1px solid #975F5F",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "10%",
                }}>
                    <div className="contenu">
                        <h1> Rosier Rose</h1>
                        <div className="text_info">
                            <p><b>Nom:</b> Rosier Rose</p><br />
                            <p><b>Ville:</b> Paris</p><br />
                            <p1><b>Date: From 15/02/23 to 21/05/23</b></p1>
                        </div>
                    </div>
                </div>
                <a href="http://localhost:3000/Annonce"><button className="button_ajout">Déposer une annonce</button></a>
            </div>
        </div>
    );
};

export default Plantes;