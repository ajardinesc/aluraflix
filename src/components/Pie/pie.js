import styles from "./pie.module.css"
import logo from "./image 1.png"

function pie(){
    return (
        <pie className={styles.pie}>
            <section className={styles.logopiecontainer}>
                    <img src={logo} alt="Logo Alura"/>
                </section>
            <h2>Desarrollador por Angel Jardiens</h2>
        </pie>
    )
}

export default pie