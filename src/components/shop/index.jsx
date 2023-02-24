import React, { useState } from "react";
import Header from "../Header";
import "./Shop.css";
import Box from "./Boxe";

const Shop = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        // Effectuer une recherche avec la requête "query" ici
        console.log("Recherche effectuée pour :", query);
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <Header />
            <form onSubmit={handleSearch}>
                <input className="search_bar"
                    type="text"
                    placeholder="Recherche ville ......."
                    value={query}
                    onChange={handleInputChange}
                />
                <button type="submit" className="recherch_btn">Rechercher</button>
            </form>
            <Box
                title="Plante La caconce"
                name="La aconce"
                city="Lille"
                date="22/04/2023 à 01/06/2023"
            />
        </div>
    );
};

export default Shop;