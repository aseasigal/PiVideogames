import './gamesDetail.css';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGamesDetails } from "../../redux/actions";
import { Link } from 'react-router-dom';
import { cleanDetail } from '../../redux/actions';


const GamesDetail = (props) => {
const dispatch = useDispatch()
const {id} = useParams()

const gamesDetail = useSelector((state)=>state.gamesDetail)
React.useEffect(()=>{
  dispatch(getGamesDetails(id))
  return()=>{dispatch(cleanDetail())}
},[])
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