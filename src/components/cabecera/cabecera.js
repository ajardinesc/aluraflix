import { Link } from "react-router-dom"
import styles from "./cabecera.module.css"
import logo from "./image 1.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink"

function Cabecera(){
    return(
        <header className={styles.Cabecera}>
            <Link to="/">
                <section className={styles.logocontainer}>
                    <img src={logo} alt="Logo Alura"/>
                </section>
            </Link>
            <nav className={styles.nav}>
            <div className={styles.navLinks}>
                <CabeceraLink url="./">Inicio</CabeceraLink>
                <CabeceraLink url="./NuevoVideo">Nuevo Video</CabeceraLink>
                </div>
            </nav>
        </header>
    )
}

export default Cabecera

