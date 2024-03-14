import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const AnotherUser = "Gyani Bhai 2 ";
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google',
  AnotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

 <App/>
  
 
)
