import React, {useState} from 'react'

export default function Bücher() {
    const[bibliotehk, setBibliothek] = useState([

    {name:"Harry Potter1", author:"XXX", Jahr:"1900"},
    {name:"Harry Potter2", author:"XXX", Jahr:"1901"},
    {name:"Harry Potter3", author:"XXX", Jahr:"1902"}

    ])
    const[buch,setBuch] = useState({name:"",author:"",jahr:""})

    const addBuch=()=>{
      setBibliothek([...bibliotehk,buch])
      setBuch({name:"",author:"",jahr:""})
    }
    
    
  return (
    <div>
        < input value={buch.name} type='text' onChange={(e)=>{setBuch({...buch,name:e.target.value})}} placeholder='Buch Name..'/>
        < input value={buch.author} type='text' onChange={(e)=>{setBuch({...buch,author:e.target.value})}} placeholder='Buch Author..'/>
        < input value={buch.jahr} type='text' onChange={(e)=>{setBuch({...buch, jahr:e.target.value})}} placeholder='Buch Jahr..'/>

        <button onClick={addBuch}>Add</button>
        <div style={{display:"flex",flexWrap:"wrap"}}>
          {
            bibliotehk.map((buch,index)=>
            {
              return(
                <div style={{border:"2px solid red", backgroundColor:"turquoise", width:"300px", margin:"5px"}} key={index}>
                  <h1>Buch Name: {buch.name}</h1>
                  <h2>Buch Autor: {buch.author}</h2>
                  <h3>Buch Jahr: {buch.jahr}</h3>
                </div>
              )
            })
          }
        </div>

    </div>
  )
}
