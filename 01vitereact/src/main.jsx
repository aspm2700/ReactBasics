import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const element = (<a href="https://google.com" target="_blank">Click for go to google.com</a>)

const evaluatedExpressionData = ' React.CreateElement' 

const createReactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Visit google',
  evaluatedExpressionData //variable injected
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  //element

  //createReactElement
)
