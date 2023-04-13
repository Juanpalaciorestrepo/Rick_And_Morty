const validation=(userData)=>{

const errors={};

if(! /\S+@\S+\.\S+/.test(userData.email))
{
errors.email="email invalido"
}

if(!userData.email){errors.email="debes ingresar un email"}

if(userData.email.length>35)
{
   errors.email="el email no debe superar los 35 caracteres"  
}

if(!/.*\d+.*/.test(userData))
{
    errors.password="la contraseña debe tener un numero"
}

if(userData.password.length>10||userData.password.length<6)

{
   errors.password="debe ser minimo de 6 caracteres y maximo 10" 
}

return errors;
}
export default validation;