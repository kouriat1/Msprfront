import React, { useState } from 'react';
import Header from '../Header';
import './historique.css';

function Historique() {
    const [historique, setHistorique] = useState([
        {
            nom: 'Fougère de Boston',
            date: '2022-02-20',
            duree: '2 semaines',
            commentaire: 'La plante était en bonne santé'
        },
        {
            nom: 'Lierre',
            date: '2022-03-05',
            duree: '1 semaine',
            commentaire: "La plante avait besoin d'être arrosée plus souvent"
        }
    ]);

    return (
        <div>
            <Header />
            <div className="historique-container">
                <h1>Historique des plantes gardées</h1>
                {historique.length === 0 && <p>Aucune plante n'a été gardée jusqu'à présent.</p>}
                {historique.map((plante, index) => (
                    <div key={index} className="historique-plante">
                        <h2>{plante.nom}</h2>
                        <p>
                            <b>Date :</b> {plante.date}
                        </p>
                        <p>
                            <b>Durée :</b> {plante.duree}
                        </p>
                        <p>
                            <b>Commentaire :</b> {plante.commentaire}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Historique;
