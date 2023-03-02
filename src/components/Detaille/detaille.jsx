import React from "react";
import Header from "../Header";
import "./boxedetaille.css";
import Box from "./boxedetaille";

const Detaille = () => {
    return (
        <div>
            <Header />
            <Box
                title="Plante La caconce"
                name="La aconce"
                city="Angers"
                description="La caconce est
                 l’une des plus jolies plantes d’intérieur, souvent remarquable au moment des fêtes 
                 de fin d’année et de Noël."
                date="22/04/2023 à 01/06/2023"
            />
        </div>
    );
};

export default Detaille;