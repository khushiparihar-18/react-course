import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'


function MyApp(){
    return (
        <div>
            <h1>Custom App! | kp here</h1>
           </div>  
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href:'https://google.com',
//         target : '_blank'
//     },
//     children : 'Click here to Visit the Google!'
// }

const anotherElement = ( 
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "kp & basketball with CODE!"

const ReactElement = React.createElement(
    'a',
    {href:'https://youtube.com',target:'_blank'},
    'Click here to Visit YouTube',
    anotherUser
)

createRoot(document.getElementById('root')).render(
 
    // <App />
    // <MyApp />
    // MyApp()   // it will also render 
    // ReactElement
    // anotherElement
    ReactElement
)
