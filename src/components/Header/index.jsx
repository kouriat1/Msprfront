import React from "react";
import styles from './styles.module.css';
import logo from '../img/logo.png'

const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <img src={logo} />
                <a href='/accueil'><h1>Accueil</h1></a>
                <a href='/shop'><h1>Shop</h1></a>
                <a href='/mesPlantes'><h1>Mes plantes</h1></a>
                <a href='/contact'><h1>Contact</h1></a>

                <button className={styles.white_btn} onClick={handleLogout}>
                    logout
                </button>
            </nav>
        </div>
    );
};

export default Header;