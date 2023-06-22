import { CREATE_NEW_GAME, GET_BY_NAME, GET_GAMES, GET_GAMES_DETAIL } from "../actions"
let initialState = {allGames:[], gamesCopy:[], gamesDetail:{}}
function rootReducer(state = initialState,action){
    switch(action.type){
    case GET_GAMES:
            return{
            ...state,
            allGames:action.payload,
            gamesCopy:action.payload,
           
        }
    case GET_GAMES_DETAIL:
            return{
                ...state,
                gamesDetail: action.payload
            }

    case GET_BY_NAME:
        return{
            ...state,
            allGames:action.payload
        }
    case CREATE_NEW_GAME:
        return{
            ...state,
            allGames:action.payload,
            gamesCopy:action.payload
        }    
        default :
        return state
    }
}
export default rootReducer
