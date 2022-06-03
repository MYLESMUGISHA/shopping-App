import React, { useState } from 'react'
import "./index.css";
import {BiTrashAlt} from "react-icons/bi";

function Shopping() {

const [itemName,setItemName]= useState("")
const [itemNumber, setItemNumber] = useState("")
const [storedItem, setStoredItem] = useState([]);

const deleteBtn =(id)=>{
  let newProduct = storedItem.filter((form1)=>{
  
      return form1.id !== id
  
  })
  setStoredItem(newProduct)
     }
const handleSubmit=(e)=>{
e.preventDefault();

if(itemName && itemNumber){


   // /create an object 
   const item = {itemName, itemNumber ,id: new Date().getTime().toString()}
// glab item and stored them in our empty array
 setStoredItem((storedItem)=>{
   return [...storedItem, item]
 })
 console.log(item)
  //3. on success run this code
}
//4. on success run this code
else{
  
  //  when use click on empty submit form value
  alert(" Hey provide the name ")
}

}
console.log(storedItem)
  return (
    
      <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      <h3>grocery bud</h3>
      <div className='form-control'>
        <input
          type='text'
          className='grocery'
          placeholder='e.g. eggs'
          value={itemName}
          onChange={(e)=>setItemName(e.target.value)}
        />
        <br/>
        <input
          type='text'
          className='grocery'
          placeholder='number'
          value={itemNumber}
          onChange={(e)=>setItemNumber(e.target.value)}
          />
        <button type='submit' className='submit-btn'>
         Submit
        </button>
      </div>
    </form>
  {storedItem.map((person)=>{

const {itemName,itemNumber,id} = person;
return(

  <div className='item' key={id}>
<h4>{itemName}</h4>
<p>{itemNumber}</p>
<button className="btn" onClick={()=>deleteBtn(id)}><BiTrashAlt className='delete-icon'/></button>
  </div>
)}
  
)}
  </section>

  )
}

export default Shopping
