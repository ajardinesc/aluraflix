import { Link } from "react-router-dom"
import styles from "./CabeceraLink.modules.css"
import { Children } from "react"

function CabeceraLink({url,Children}){
    return(
        <Link to={url} className={styles.link}>
        {Children}
        </Link>
    )
}

export default CabeceraLink
