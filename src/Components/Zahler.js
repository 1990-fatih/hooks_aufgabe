import React,{useState} from 'react'

export default function Zahler
() {
    const initialState = 0	
    const [zahler, setZahler] = useState(initialState)
  return (
    <div>
    <div>zahler: {zahler}</div>
    <button onClick={()=> setZahler(prevZaehler=> prevZaehler+1)}>Höhe</button>
    <button onClick={()=> setZahler(prevZaehler=> prevZaehler-1)}>Minus</button>
    <button onClick={()=> setZahler(initialState)}>Reset</button>
    </div>
  )
}
