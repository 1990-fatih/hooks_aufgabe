import React, { useState } from 'react'

export default function 
() {

    const [ausweiss, setAusweiss] = useState({name:"Fatih", vorName:"n"})

  return (
    <div>
        <input onChange={(e)=>setAusweiss({...ausweiss, name:e.target.value})} type="text" value={ausweiss.name} placeholder='name'/>
        <input type="text" value={ausweiss.vorName} onChange={(e)=>setAusweiss({...ausweiss, vorName:e.target.value})} placeholder='VorName'/>
        <div>name:{ausweiss.name} </div>
        <div>VorName:{ausweiss.vorName} </div>
    </div>
  )
}
