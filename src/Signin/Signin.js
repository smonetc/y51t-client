import React from 'react'
import './Signin.css'
import { useForm } from "react-hook-form";


export default function Signin (props){
   const { register, handleSubmit, watch, errors } = useForm();
   const onSubmit = data => console.log(data);

   return(
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username:</label>
            <input name="userName" ref={register({ required: true, maxLength: 10 })} />
            <label>Username:</label>
            <input name="password" ref={register({ required: true, maxLength: 10 })} />
            <input type="submit" />
         </form>
      </div>
   )   
}

