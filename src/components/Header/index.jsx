import React from "react";
import styles from './styles.module.css';
import logopng from '../img/logopng.png'
import icon_profil from '../img/icon_profil.png'

const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <a href='/accueil'><img src={logopng} alt="" /></a>
                <a href='/accueil'><h1>Accueil</h1></a>
                <a href='/shop'><h1>Shop</h1></a>
                <a href='/mesPlantes'><h1>Mes plantes</h1></a>
                <a href='/contact'><h1>Contact</h1></a>

                <button className={styles.white_btn} onClick={handleLogout}>
                    logout
                </button>
                <a href="http://localhost:3000/Profil"><img src={icon_profil} alt="icon_profile" className={styles.icon_profil} /></a>
            </nav>
        </div>
    );
};

export default Header;