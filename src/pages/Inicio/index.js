import Banner from "components/Banner";
import Card from "components/Card";
import styles from "./index.module.css";
import videos from "data/db.json";

function Inicio(){
    return(
        <>
        <Banner img="home" color="#154580">
        <Card id="1" titulo="Gato" capa="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"/>
        </Banner>

        <section className={styles.Container}>
            {videos.map((video) => {
                return <Card {...video} key={video.id}/>;
            })}
            </section>
      
        </>
    );
}

export default Inicio;