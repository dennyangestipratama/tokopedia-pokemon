import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import PokemonContext from './context/PokemonContext'
import './styles/responsive.css'

ReactDOM.render(
   <React.StrictMode>
      <PokemonContext>
         <App />
      </PokemonContext>
   </React.StrictMode>,
   document.getElementById('root')
)
