import { useState } from "react"
import styles from "./create.module.css"
import {useDispatch} from "react-redux"
import { createGame } from "../../redux/actions"



function Create (){
const [input, setInput]=useState({
    name: '',
    description:'',
    rating:0,
    releaseDate:'',
    image:'',
    genresIds:[],
})
const dispatch = useDispatch()

const validate=(input)=>{
    let error = {};

    if(!input.name) {
        error = ({...error, name: 'Llenar este campo por favor'})
    }

    if(!input.description) {
        error = {...error, description: 'Llenar este campo por favor'}
    }
    if(!input.rating) {
        error = {...error, rating: 'Llenar este campo por favor'}
        }
    else if(isNaN(Number(input.rating))){
        error = {...error, rating:"Por favor ingresar un numero decimal"}
    }
    else if (Number(input.rating) > 5 || Number(input.rating) < 0 )
    {
        error = {...error, rating:"Por favor ingresar un numero menor/igual a 5 y mayor a 0"}
    }
    if(!input.releaseDate) {
        error = {...error, releaseDate: 'Llenar este campo por favor'}
    }
    else if (isNaN(Number(input.releaseDate))){
        error = {...error, releaseDate:"Solo numeros son validos"}
    }

    setError(Object.keys(error).length ? error : null);
}
const [error,setError] = useState({
    name: 'Llenar este campo por favor',
    description:'Llenar este campo por favor',
    rating:"Llenar este campo por favor",
    releaseDate:'Llenar este campo por favor',
    image:'',
    genresIds:[],
})

const handleSubmit = (event) => {
    event.preventDefault();
    if (!error) {
      dispatch(createGame(input));
    }
  };

function handleChange(e){  
    setInput({
        ...input,
        [e.target.name]:e.target.value})
    
        validate({
            ...input,
            [e.target.name]:e.target.value
        })       
}

    return (
        <div >
            <form className={styles.divForm} onSubmit={handleSubmit}>
                <div className={styles.Row}>
                    <label>Name</label>
                    <input name="name" value={input.name} onChange={handleChange}/>
                    <span className={styles.Error}>{error?.name}</span>
                </div>
                <div className={styles.Row}>
                    <label> Description</label>
                    <input name="description" value={input.description} onChange={handleChange}/>
                    <span className={styles.Error}>{error?.description}</span>
                </div>
                <div className={styles.Row}>
                    <label> Rating
                    </label>
                    <input name="rating" value={input.rating} onChange={handleChange}/>
                    <span className={styles.Error}>{error?.rating} </span>
                </div>
                <div className={styles.Row}>
                    <label> Release Date</label>
                    <input name="releaseDate" placeholder="aaaa/mm/dd" value={input.releaseDate} onChange={handleChange}/>
                    <span className={styles.Error}>{error?.releaseDate}</span>
                </div>
                <div className={styles.Row}>
                    <label> Image</label>
                    <input name="image" value={input.image} onChange={handleChange}/>
                </div>
                <div className={styles.Row}>
                    <label> Genre</label>
                    <input name="genresIds" value={input.genresIds} onChange={handleChange}/>
                </div>
                {error ? null :  <button onClick={() => {}} type="submit">Crear Juego</button>}
            </form>
        </div>
    )
}

export default Create