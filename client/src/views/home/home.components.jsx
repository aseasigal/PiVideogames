import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "../../components/paginado/Paginado";
import { getGames, getByName, filterGamesByGenre, getByGenre } from "../../redux/actions";

import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";

function Home() {
  const dispatch = useDispatch();
  const allGenres = useSelector((state)=>state.allGenres)
  const gamesCopy = useSelector((state) => state.gamesCopy);
  const [searchGame, setSearchGame] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [gamesPerPage, setGamesPerPage] = useState(15)
  const indexOfLastGame = currentPage * gamesPerPage
  const indexOfFirstGame = indexOfLastGame - gamesPerPage
  const currentGames = gamesCopy.slice(indexOfFirstGame,indexOfLastGame)

  const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }

  function handleChange(e) {
    e.preventDefault();
    setSearchGame(e.target.value);
  }

  function handleFilterGenre(e){
    dispatch(filterGamesByGenre(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(searchGame));
  }

  useEffect(() => {
    dispatch(getGames());
  }, []);

  useEffect(()=>{
    dispatch(getByGenre());
  },[])

  return (
    
    <div>
      <Navbar allGenres={allGenres} 
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
      handleFilterGenre={handleFilterGenre}/>
      <Cards allGames={currentGames} />
      <Paginado
      gamesPerPage= {gamesPerPage}
      allGames={gamesCopy.length}
      paginado={paginado}
      />
    </div>
  );
}

export default Home;
