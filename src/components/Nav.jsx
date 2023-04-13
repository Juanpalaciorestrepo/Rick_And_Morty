import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props){

    return(

        <nav>
            <SearchBar onSearch={props.onSearch}/>
          <button>
            <Link to ="/About" >ABOUT</Link>
          </button>  

          <button>
          <Link to ="/Home">HOME</Link>
          </button>
          <button>
          <Link to ="/Favorites">FAVORITES</Link>
          </button>
           
        </nav>
    )

}
