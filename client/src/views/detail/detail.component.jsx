import './gamesDetail.css';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGamesDetails } from "../../redux/actions";
import { Link } from 'react-router-dom';

const GamesDetail = (props) => {
const dispatch = useDispatch()
const {id} = useParams()

React.useEffect(()=>{
  dispatch(getGamesDetails(id))
},[])
const gamesDetail = useSelector((state)=>state.gamesDetail)
console.log(gamesDetail)
return (
  <div className="detail">
    <h1>{gamesDetail?.name}</h1>
    <img src={gamesDetail?.image} alt={gamesDetail?.name} />
    <h5>Generos: {gamesDetail?.genres?.map(x => x.name).join(', ')}</h5>
    <h5>Lanzamiento: {gamesDetail?.releaseDate}</h5>
    <h5>Rating: {gamesDetail?.rating}</h5>
    <button className="backButton">
    <Link  to={`../home`}>Volver Home</Link>
    </button>
  </div>
);
};

export default GamesDetail;