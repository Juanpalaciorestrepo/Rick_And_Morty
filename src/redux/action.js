import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./action-types";




export const addfav =(character)=>{

    return{ type: ADD_FAV, payload: character}

};

export const removefav =(id)=>{

    return{ type: REMOVE_FAV, payload: id}

};
export const filterCards =(gender)=>{

    return{ type: FILTER, payload: gender}

};
export const orderCards =(order)=>{

    return{ type: ORDER, payload: order}

};