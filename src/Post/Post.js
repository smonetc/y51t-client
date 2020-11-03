import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './Post.css'

export default function Post (props){
   const { register, handleSubmit, watch, errors } = useForm();
   const onSubmit = data => console.log(data);

   const [startDate, setStartDate] = useState(new Date());
   const ExampleCustomInput = ({ value, onClick }) => (
     <button className="example-custom-input" onClick={onClick}>
       {value}
     </button>
     );

   return(
      <div className='post-form'>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='location'>Location:</label>
            <br />
            <select name="location" ref={register({ required: true })} >
               <option>Choose One</option>
               <option>USA</option>
               <option>Canada</option>
               <option>Europe</option>
               <option>Mexico</option>
            </select>
            <br />
            <label htmlFor='date'>Date:</label>
            <br />
            <DatePicker
               className='date'
               selected={startDate}
               onChange={date => setStartDate(date)}
               customInput={<ExampleCustomInput />}
            />
            <br/>
            <label htmlFor='category'></label>
            <br />
            <label htmlFor='category'>Category:</label>
            <br />
            <select>
            <option value={null}>Pick One:</option>
            {props.category.map( category => 
               <option key={category.id} value={category.id}>
                  {category.title}
               </option>
               )}
            </select>
            <br />
            <label htmlFor='content'>Description:</label>
            <br />
            <textarea />
            <br />
            <label htmlFor='userName'>Your Name:</label>
            <br />
            <input type="text" id='userName' name='userName' placeholder='Anonymous'/>
            <br />
            <input type="submit" />
         </form>
      </div>
   )
}
