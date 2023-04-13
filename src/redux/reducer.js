import { ADD_FAV,REMOVE_FAV } from "./action-types"; 

const initialState ={
    myFavorites:[],
    allCharacters:[],


}

const reducer=(state=initialState, {type, payload})=>
{switch(type)
    {
        case ADD_FAV:
            return{
                ...state,
            myFavorites:[...state.allCharacters, payload],
            allCharacters:[...state.allCharacters, payload]
            }

        case REMOVE_FAV:
            return{
                ...state,
                myFavorites:state.myFavorites.filter(fav=>fav.id!==+payload)
            }

         case FILTER:
            const allCharactersFiltered=state.allCharacters.filter(ch=>ch.gender===payload)
            return{
              ...state,
              
              myFavorites:
              payload==="allCharacters"
              ? [...state.allCharacters]
              : allCharactersFiltered

            }

            case ORDER:
                const allCharactersFilteredCopy=[...state.allCharactersFiltered]
                return{
                    ...state,
                myFavorites:
                payload==='A'
                ? allCharactersFilteredCopy.sort((a,b)=>a.id-b.id)
                : allCharactersFilteredCopy.sort((a,b)=>b.id-a.id)
            


                }

        default:
            return{...state}
    }

}


export default reducer;