import { useState } from "react";
import validation from "./Validation";

const Form =({login})=>{
const [userData,setUserData]=useState({

    email:"",
    password:"",
}); 
const [error,setError]=useState({})

const handleChange=(event)=>{
setUserData(
    {
        ...userData,
        [event.target.name]:event.target.value
    })

    setError(validation(
{
    ...userData,
    [event.target.name]:event.target.value
}
    ))
}
const handleSubmit=(event)=>{

    event.preventDefault();
    login(userData);
}
return(
<form onSubmit={handleSubmit}>

<label htmlFor="email" >Email</label>
<input type="Text" onChange={handleChange} name="email" value={userData.email}/>   
{error.email&&<p >{error.email}</p>}
<hr/>
<label htmlFor="passwword">  password </label>
<input type="password" onChange={handleChange} name="password" value={userData.password}/>   
{error.password&&<p >{error.password}</p>}

<button>Submit</button>
</form>



)


}

export default Form;