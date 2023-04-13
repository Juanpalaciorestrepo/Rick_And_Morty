import './Card.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { addfav, removefav } from '../redux/action';
import { connect, Connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card(props) {

   const [isFav, setIsFav]= useState(false);

   const handleFavorite =( ) =>
   {
      if(isFav){
         setIsFav(false);
         removefav(id);
      }
      else{
      
         setIsFav(true);
         addfav(props.p);
      
   }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {//destructuring
            setIsFav(true);
         }
      });
   }, [myFavorites]);



   return (<>
      <div id="card">
      
      <button onClick={handleFavorite}>{isFav ?'❤️':'🤍'}</button>
   
     


          <button id="cerrar" onClick={()=>props.onClose(props.p.id)}>X</button>
         
         <Link to={`/Detail/${props.p.id}`}>
         <h2>{props.p.name}</h2>
         </Link>
         
         
         <h2>{props.p.status}</h2>
         <h2>{props.p.species}</h2>
         <h2>{props.p.gender}</h2>
         <h2>{props.p.origin.name}</h2>
         <img id="picture" src={props.p.image} alt='' /> 
         
      </div>
      
      </>
   );
}
const mapStateToProps=(state)=>{
return{
   myFavorites: state.myFavorites
}

}


const mapDispatchToProps=(dispatch) =>
{
   return{
      addfav:(character)=>{dispatch(addfav(character))},

      removefav:(id)=>{dispatch(removefav(id)) }
   }
}

export default connect(

   null,
   mapDispatchToProps
)(Card);
 