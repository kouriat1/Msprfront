import React, { useState } from "react";
import Header from "../Header";
import "./annonce.css";
import axios from "axios";


function Annonce() {
    const user = JSON.parse(localStorage.getItem('userid'));
    const [titre, setTitre] = useState("");
    const [nom, setNom] = useState("");
    const [ville, setVille] = useState("");
    const [description, setDescription] = useState("");
    const [date_depart, setDateDebut] = useState("");
    const [date_retour, setDateFin] = useState("");
    const [photo, setPhoto] = useState("");
    const [proprietaire_id, SetProp] = useState(user);

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3005/annonces/add", {
                titre,
                nom,
                ville,
                description,
                date_depart,
                date_retour,
                photo,
                proprietaire_id

            });

            // rediriger vers la page d'accueil après la connexion
            //   window.location.href = '/accueil';
            // alert("annonce  Added",user)
            console("s")
        } catch (error) {
            alert(error)
            console.error(error);
        }
    };
    // //vider les champs après la soumassion
    // setTitre("");
    // setNom("");
    // setVille("");
    // setDescription("");
    // setDateDebut("");
    // setDateFin("");
    // setPhoto(null);
    return (

        console.log(user),
        <div className="annonce">
            <Header /><br />
            <h1 className="titre_ann"><b>Déposer votre annonce</b></h1><br />
            <div className="form_cont">
                <form onSubmit={handleSubmit}>
                    <div className="form_field_titre">
                        <label htmlFor="titre">Titre*</label>
                        <input
                            type="text"
                            id="titre"
                            value={titre}
                            onChange={(e) => setTitre(e.target.value)}
                            placeholder="Titre d'annonce..."
                        />
                    </div>
                    <div className="form_field_nom">
                        <br /><br />
                        <label htmlFor="nom">Nom*</label>

                        <input
                            type="text"
                            id="nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            placeholder="Nom du plante..."
                            required
                        />
                    </div>
                    <div className="form_field_ville">
                        <label htmlFor="ville">Ville*</label>
                        <input
                            type="text"
                            id="ville"
                            value={ville}
                            onChange={(e) => setVille(e.target.value)}
                            placeholder="La ville..."
                            required
                        />
                    </div>
                    <div className="form_field_description">
                        <label htmlFor="description">Description*</label>
                        <textarea
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description de l'annonce..."
                            required
                        />
                    </div>
                    <div className="form_field_date_depart">
                        <label htmlFor="dateDebut">Date de départ* :</label>
                        <br />
                        <input
                            type="date"
                            id="dateDebut"
                            value={date_depart}
                            onChange={(e) => setDateDebut(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form_field_date_retour">
                        <label htmlFor="dateFin">Date de retour* :</label>
                        <br />
                        <input
                            type="date"
                            id="dateFin"
                            value={date_retour}
                            onChange={(e) => setDateFin(e.target.value)}
                        // required
                        />
                    </div>
                    <div className="form_field_photo">
                        <label htmlFor="photo">Ajouter Photo*</label>
                        <br />
                        <input
                            type="file"
                            id="photo"
                            accept="image/*"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                        />
                    </div>
                    <button className="envoie_ann" type="submit">Envoyer</button>

                </form>

            </div>
        </div>

    );
};

export default Annonce;
