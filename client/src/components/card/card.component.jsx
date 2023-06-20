import { Link } from "react-router-dom"
import styles from "./card.module.css"

function Card ({game}){
    if (!game) return <div>asdasDasds</div>
    const {name, image, genre, rating, id} = game 
    
    return (
        <div className={styles.DivFather}>
            <Link to={`home/${id}`}>
            <div className={styles.DivCards}>
                <h1>{name}</h1> 
                <p><img src={image} width="250px"></img></p> 
                <p>{rating}</p> 
                <li>{genre}</li>
                </div>
                </Link>   
        </div>
    )
}

export default Card