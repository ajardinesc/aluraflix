import styles from "./Card.module.css"
import IconEditar from "./editar.png"
import IconEliminar from "./eliminar.png"

function Card({id, capa, titulo}){
    return (
        <div className={styles.Container}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <figcaption className={styles.card__icons}>
                <div className={styles.card__edit}>
                <img src={IconEditar} alt="Icono editar" className={styles.editar}/>
                <h2>Editar</h2>
                </div>
                <div className={styles.card__delete}>
                <img src={IconEliminar} alt="Icono eliminar" className={styles.eliminar}/>
                <h2>Eliminar</h2>
                </div>
              </figcaption>
        </div>
    )
}

export default Card;