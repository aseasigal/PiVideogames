import Card from "../card/card.component"
import "./cards.css" 

function Cards ({allGames}){
    return (
        <div className="Cards"> 
            {allGames?.map((game)=>(
                <Card game={game}/>
            ))}
        </div>
  )
}

export default Cards