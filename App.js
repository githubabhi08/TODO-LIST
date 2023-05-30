import './App.css';
import React,{useState} from 'react'
const App=()=>{
const[activity,setactivity]=useState("")
const[listdata,setlistdata]=useState([])

const addactivity=()=>{
    setlistdata((listdata)=>{
        const updatedlist=[...listdata,activity]
        setactivity("")
        return updatedlist
    })
}

const removeactivity=(i)=>{
    const remove=listdata.filter((element,id)=>{
        return i!==id
    })
    setlistdata(remove)
}


const removeall=()=>{
    setlistdata([])
}


  return (
    <>
    <div id="crt"> 
        <h1>ADD TO YOUR CART</h1>
    </div>
    <div id="inp">

    <input
    type="text"
    placeholder="List your items here..."
    value={activity}
    onChange={(e)=>setactivity(e.target.value)} />

    </div>
   

<button id="bt" onClick={addactivity}>Add</button>

<div id="remo">
{
        listdata!==[] && listdata.map((data,i)=>{
            return (
            <>
            <div id="colo">

            <h5 key={i}> {data} </h5>
            
            <button  id="chg" onClick={()=>removeactivity(i)}>Remove</button>
            </div>

            </>
            )
        })
    }
    
    
    
    {
        listdata.length>=1  &&
        <button  id="chgi" onClick={removeall}>Remove all</button>
    }
</div>

    
    
    
    
    
    
    </>
  )
}

export default App


 






    
    
    




