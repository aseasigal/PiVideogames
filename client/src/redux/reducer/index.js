import { CREATE_NEW_GAME, FILTER_BY_GENRE, GET_BY_GENRE, GET_BY_NAME, GET_GAMES, GET_GAMES_DETAIL } from "../actions"
let initialState = {allGames:[], gamesCopy:[], gamesDetail:{}, allGenres:[]}
function rootReducer(state = initialState,action){
    switch(action.type){
    case GET_GAMES:
            return{
            ...state,
            allGames:action.payload,
            gamesCopy:action.payload,
        }
    case GET_BY_GENRE:
        return{
            ...state,
            allGenres:action.payload
        }
    case GET_GAMES_DETAIL:
            return{
                ...state,
                gamesDetail: action.payload
            }
    case FILTER_BY_GENRE:
        const allGames = state.allGames
        const genreFiltered = action.payload === "All" ? allGames : allGames.filter( el => el.genres === action.payload)
        return {
            ...state,
            allGames: genreFiltered,
            gamesCopy: genreFiltered
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
