import { useState } from 'react'
import './App.css'
import { useSearchParams } from 'react-router-dom';
import {getProduct} from  "./Endpoints/Endpoints.js"
function App() {
  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const [input, setInput] = useState("")
  const handleSubmit=async(e)=>{
    const newQueryParameters = new URLSearchParams();
    e.preventDefault();
if(!input){
  return alert("id must not be empty")
}
newQueryParameters.set("id", input);
setSearchParams(newQueryParameters);    

const response = await getProduct(`/products/${input}`)
console.log("Product fetched.")
console.table(response)
  }
  const handleChange=(e)=>{
    setInput(e.target.value)
  }

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
    <input onChange={handleChange}/>
    <button  style={{margin:"20px"}} onClick={handleSubmit} value={"Submit"}>Submit</button>
    </div>
  )
}

export default App
