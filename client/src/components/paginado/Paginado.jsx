import React from "react";
import "./paginado.css"
export default function Paginado ({gamesPerPage, allGames, paginado}){
    const pageNumbers = []

    for (let i=0; i<=Math.ceil(allGames/gamesPerPage);i++){
        pageNumbers.push(i+1)
    }
    return (
        <nav className="paginacion">
            <ul>
                {pageNumbers && 
                pageNumbers.map(number=>(
                    <li className='number' key={number}>
                    <a onClick={()=> paginado(number)} >{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}