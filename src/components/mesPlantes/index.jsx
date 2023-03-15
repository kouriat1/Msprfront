import React from "react";
import Header from "../Header";
import "./mes_plantes.css";
import plante1 from '../img/plante1.jpeg';
import plante2 from '../img/plante2.jpg';
import iconP from '../img/icon profil.png';
import iconPar from '../img/icon parametre.png';
import iconInfo from '../img/icon information.png';
import iconHi from '../img/iconHi.png';



const Plantes = () => {
    return (
        <div>
            <Header />
            <div className="mes_plantes">
                <h1><b>Mes Plantes:</b></h1><br />
                <img src={plante1} alt="plante1" />
                <div className="boxe_plante" style={{
                    width: "390px",
                    height: "190px",
                    backgroundColor: "#f7f7f7",
                    border: "1px solid #975F5F",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "6%",
                }}>
                    <div className="contenu">
                        <h1> Plante Turnosole</h1>
                        <div className="text_info">
                            <p><b>Nom:</b> Turnosole</p><br />
                            <p><b>Ville:</b> paris</p><br />
                            <p className="date_info"><em>Date: From 02/04/23 to 01/05/23</em></p>
                        </div>
                    </div>
                </div>
                <img className="plante2" src={plante2} alt="plante2" />
                <div className="boxe_plante2" style={{
                    width: "390px",
                    height: "190px",
                    backgroundColor: "#f7f7f7",
                    border: "1px solid #975F5F",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "6%",
                }}>
                    <div className="contenu">
                        <h1> Rosier Rose</h1>
                        <div className="text_info">
                            <p><b>Nom:</b> Rosier Rose</p><br />
                            <p><b>Ville:</b> Paris</p><br />
                            <p className="date_info"><em>Date: From 15/02/23 to 21/05/23</em></p>
                        </div>
                    </div>
                </div>
                <a href="http://localhost:3000/Annonce"><button className="button_ajout"><b>Déposer une annonce</b></button></a>
            </div>
            <div className="icon-profil">
                <a href="#"><img src={iconP} alt="icon profil" /></a>
            </div>
            <div className="icon-parametre">
                <a href="#"> <img src={iconPar} alt="icon parametre" /></a>
            </div>
            <div className="icon-information">
                <a href="http://localhost:3000/accueil" ><img src={iconInfo} alt="icon information" /></a>
            </div>
            <div className="icon-historique">
                <a href="http://localhost:3000/historique" ><img src={iconHi} alt="icon Historique" /></a>
            </div>

        </div>
    );
};

export default Plantes;