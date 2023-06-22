import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "../../components/paginado/Paginado";
import { getGames, getByName, filterGamesByGenre, getByGenre } from "../../redux/actions";

import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";

function Home() {
  const dispatch = useDispatch();
  const allGenres = useSelector((state)=>state.allGenres)
  const allGames = useSelector((state) => state.allGames);
  const gamesCopy = useSelector((state) => state.gamesCopy);
  const [filtered, setFiltered] = useState(gamesCopy);
  const [searchGame, setSearchGame] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [gamesPerPage, setGamesPerPage] = useState(15)
  const indexOfLastGame = currentPage * gamesPerPage
  const indexOfFirstGame = indexOfLastGame - gamesPerPage
  const currentGames = allGames.slice(indexOfFirstGame,indexOfLastGame)

  const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }
  function handleChange(e) {
    e.preventDefault();
    setSearchGame(e.target.value);
  }

  function handleFilterGenre(e){
    dispatch(filterGamesByGenre(e.targe.value))
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(searchGame));
    setFiltered(allGames);
  }
  useEffect(() => {
    dispatch(getGames());
  }, []);

  useEffect(()=>{
    dispatch(getByGenre());
  },[])

  return (
    
    <div>
      <select onChange={e => handleFilterGenre(e)} >
      {allGenres?.map((genre)=>(
        <option value={genre.name}>{genre.name}</option>
      ))}
      </select>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Cards allGames={currentGames} />
      <Paginado
      gamesPerPage= {gamesPerPage}
      allGames={allGames.length}
      paginado={paginado}
      />
    </div>
  );
}

export default Home;
