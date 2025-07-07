import { useState } from 'react'  // hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [cnt,sC] = useState(18)
  let [cnt,sC] = useState(8)
  

//  let counter = 18
 const addValue = ()=>{
  // if(cnt < 20){
  // cnt += 1;
  // }
  // sC(cnt);
  // sC(cnt+1)
  // sC(cnt+1)
  // sC(cnt+1)
  // sC(cnt+1)
  // sC(cnt+1)
  // sC(cnt+1)
  // sC(cnt+1)
  
  // Yeah! We can do Like this but this isn't A Good Practice!:)
  // sC((cn)=>cn+1)
  // sC((cntr)=>cntr+1)
  // sC((cnr)=>cnr+1)

  // GOod Practice is Like This :
  sC((cn)=>cn+1)
  sC((cntr)=>cntr+1)
  sC((cnr)=>cnr+1)

}
  const removeValue = ()=>{
    if(cnt > 0){
    cnt-=1;
    }
    sC(cnt);
    
 }

 
  return (
    <>
     <h1>Basketball aur React</h1>
     <h2>Counter Value : {cnt}</h2>

     <button
     onClick={addValue}
     >Add Value {cnt}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove Value {cnt}</button>
     <p>history : {cnt}</p>
    </>
  )
}

export default App
