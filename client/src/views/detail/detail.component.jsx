import './gamesDetail.css';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGamesDetails } from "../../redux/actions";

const GamesDetail = (props) => {
const dispatch = useDispatch()
const {id} = useParams()

React.useEffect(()=>{
  dispatch(getGamesDetails(id))
},[])
const gamesDetail = useSelector((state)=>state.gamesDetail)
  return (
    <div className='detail'>
      <h1>{gamesDetail?.name}</h1>
      <img src={gamesDetail?.imagen} alt={gamesDetail?.name} />
      <h3>Plataformas: {gamesDetail?.platform}</h3>
      <h5>Generos: {gamesDetail?.genres}</h5>
      <h5>Lanzamiento: {gamesDetail?.releaseDate}</h5>
      <h5>Rating: {gamesDetail?.rating}</h5>
    </div>
  );
};

export default GamesDetail;