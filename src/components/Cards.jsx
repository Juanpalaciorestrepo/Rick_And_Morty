import Card from './Card';
import './Card.css';
export default function Cards(props) {
   return (
   <div >
    {props.characters.map(element=>{
      return(
          <Card p={element} onClose={props.onClose}/>
      )
    })}


   </div>
   
   
   )
}
