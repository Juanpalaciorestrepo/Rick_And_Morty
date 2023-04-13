import './App.css';
import './components/Card.css';
import Nav from './components/Nav';
import { useState , useEffect} from 'react';
import Cards from './components/Cards.jsx';
import axios from 'axios';
import { Route, Routes , useLocation , useNavigate} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';
const email ="gamerdim.18@gmail.com"
const password="123456"

function App() {
   const navigate=useNavigate();
   const [access, setAccess]=useState(false);
  const location = useLocation();
   let [characters,setCharacters]=useState([])

const login =(userData)=>{
if(userData.email === email && userData.password===password)
{
   setAccess(true)
   navigate('/home')
}
}
useEffect(() => {
   !access && navigate('/');
}, [access,navigate]);


   const onSearch=(id)=> {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){

      const charactersFilter= characters.filter(characters=>characters.id!==Number(id))
      setCharacters(charactersFilter)
   }

   
   return (
      <div className='App'>
      {
         location.pathname!=="/"
         ? <Nav onSearch={onSearch}/>
         :null
      }
         

         <Routes>
            <Route path='/' element={<Form login={login} />}/>
             <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
             <Route path='/About' element={<About/>}/>
             <Route path='/Detail/:id' element={<Detail/>}/>
             <Route path='/Favorites' element={<Favorites/>}/>
         </Routes>
         
         
      </div>
   );
}


export default App;
