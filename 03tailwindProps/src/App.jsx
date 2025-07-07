import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username : "Khushi Parihar",
    age: 19
  }

  let newArray = [1,2,3,4,5]
  

  return (
    <>
      <h1 className='bg-purple-300 text-black p-4 rounded-2xl'>Tailwind Test</h1>
       {/* < Profile username="BucketsBrigade" myObject />
       < Profile username="khushiparihar_18" anyObj = 
       {myObject} myArr = {newArray} /> */}

       < Profile username = "Buckets Brigade" btnText = "Click me"/>
       < Profile username = "kpNBA Star" btnText = "Visit Me"/>
       < Profile username = "Sniper Driving"/>
    </>
  )
}

export default App
