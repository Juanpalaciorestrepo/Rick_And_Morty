import Card from "./Card"
import { connect, useDispatch } from "react-redux"
import { orderCards,filterCards } from "../redux/action"
import { useState } from "react"

const favorites=()=>{
 const [aux,setAux]=useState(false)
    const dispatch=useDispatch();

const handlerOrder=(event)=>{
  dispatch(orderCards(event.target.value));
  setAux(true);
}

const handlerFilter=(event)=>{
dispatch (filterCards(event.target.value))

}
return(
<>
<select on onChange={handlerOrder}>

<option value="A">Ascendente</option>
<option value="D">Descendente</option>


</select>
<select onChange={handlerFilter}>

<option value="Male">Male</option>
<option value="Female">Female</option>
<option value="Gender">Gender</option>
<option value="unknown">unknown</option>
<option value="allCharacters">allCharacters</option>


</select>


{myFavorites?.map(fav=>{
    return(
        <Card
        
        //aca van las propiedades que vienen por props
        
        
        />
    )
})}
</>

)

}

const mapStateToProps=(state)=>
{
return{
    myFavorites: state.myFavorites
}

}

export default connect(

    mapStateToProps,
    null
)(favorites)