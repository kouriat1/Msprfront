import React, { useState } from "react";
import Header from "../Header";
import "./annonce.css";

const Annonce = () => {
    const [titre, setTitre] = useState("");
    const [nom, setNom] = useState("");
    const [ville, setVille] = useState("");
    const [description, setDescription] = useState("");
    const [dateDebut, setDateDebut] = useState("");
    const [dateFin, setDateFin] = useState("");
    const [photo, setPhoto] = useState("");


    const handleTitreChange = (e) => {
        setTitre(e.target.value);
    };

    const handleNomChange = (e) => {
        setNom(e.target.value);
    };

    const handleVilleChange = (e) => {
        setVille(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleDateDebutChange = (e) => {
        setDateDebut(e.target.value);
    };

    const handleDateFinChange = (e) => {
        setDateFin(e.target.value);
    };
    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Titre : ${titre}`);
        console.log(`Nom : ${nom}`);
        console.log(`Ville : ${ville}`);
        console.log(`Date de début : ${dateDebut}`);
        console.log(`Date de fin : ${dateFin}`);
        console.log(`Photo : ${photo}`);

        const formData = new FormData();
        formData.append("photo", photo);
        //envoie le formaData au serveur

        //vider les champs après la soumassion
        setTitre("");
        setNom("");
        setVille("");
        setDescription("");
        setDateDebut("");
        setDateFin("");
        setPhoto(null);
    };

    return (
        <div className="annonce">
            <Header /><br />
            <h1 className="titre_ann"><b>Déposer votre annonce</b></h1><br />
            <div className="form_cont">
                <form onSubmit={handleSubmit}>
                    <div className="form_field_titre">
                        <label htmlFor="titre"><b>Titre</b></label>
                        <input
                            type="text"
                            id="titre"
                            value={titre}
                            onChange={handleTitreChange}
                            placeholder="Titre d'annonce..."
                        />
                    </div>
                    <div className="form_field_nom">
                        <br /><br />
                        <label htmlFor="nom"><b>Nom</b></label>

                        <input
                            type="text"
                            id="nom"
                            value={nom}
                            onChange={handleNomChange}
                            placeholder="Nom du plante..."
                            required
                        />
                    </div>
                    <div className="form_field_ville">
                        <label htmlFor="ville"><b>Ville</b></label>
                        <input
                            type="text"
                            id="ville"
                            value={ville}
                            onChange={handleVilleChange}
                            placeholder="La ville..."
                            required
                        />
                    </div>
                    <div className="form_field_description">
                        <label htmlFor="description"><b>Description</b></label>
                        <textarea
                            type="text"
                            id="description"
                            value={description}
                            onChange={handleDescriptionChange}
                            placeholder="Description de l'annonce..."
                            required
                        />
                    </div>
                    <div className="form_field_date_depart">
                        <label htmlFor="dateDebut"><b>Date de départ :</b></label>
                        <br />
                        <input
                            type="date"
                            id="dateDebut"
                            value={dateDebut}
                            onChange={handleDateDebutChange}
                            required
                        />
                    </div>
                    <div className="form_field_date_retour">
                        <label htmlFor="dateFin"><b>Date de retour :</b></label>
                        <br />
                        <input
                            type="date"
                            id="dateFin"
                            value={dateFin}
                            onChange={handleDateFinChange}
                            required
                        />
                    </div>
                    <div className="form_field_photo">
                        <label htmlFor="photo"><b>Ajouter Photo</b></label>
                        <br />
                        <input
                            type="file"
                            id="photo"
                            accept="image/*"
                            onChange={handlePhotoChange} />
                    </div>
                    <button className="envoie_ann" type="submit">Envoyer</button>
                </form>
            </div>
        </div>

    );
};

export default Annonce;
