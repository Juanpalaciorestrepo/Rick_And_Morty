import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";


    //modificar rutas para la api con url base y api key

const Detail =()=>{
    const [character, setCharacter]=useState({})
   const {id}=useParams()
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
   
   
    return(
       
        <div>
            
         <h2>{character?.name}</h2>
         <h2>{character?.status}</h2>
         <h2>{character?.species}</h2>
         <h2>{character?.gender}</h2>
         <h2>{character?.origin?.name}</h2>
         <img id="picture" src={character?.image} alt='' />
            
        </div>
    )

}
export default Detail;