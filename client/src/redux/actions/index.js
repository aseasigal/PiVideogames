import axios from "axios"

export const GET_GAMES= "GET_GAMES"
export const GET_BY_NAME= "GET_BY_NAME"
export const CREATE_NEW_GAME = "CREATE_NEW_GAME"


export function getGames(){
    return async function (dispatch){
        const response = await axios.get('http://localhost:3001/api/videogames')
        return dispatch({
            type:"GET_GAMES",
            payload: response.data,
        }) 
    }
}

export function createGame(newGame){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/api/videogames', newGame)
        return dispatch({
            type:"CREATE_NEW_GAME",
            payload: response.data
        })
    }
}

export function getByName(name){
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/api/videogames?name=${name}`)
        return dispatch({
            type:"GET_BY_NAME",
            payload: response.data,
        }) 
    }
}
