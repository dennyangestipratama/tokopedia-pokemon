import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable';

import App from './App'
import PokemonContext from './context/PokemonContext'
import './styles/responsive.css'

window.onload = () => {
   Loadable.preloadReady().then(() => {
      ReactDOM.hydrate(
         <React.StrictMode>
            <PokemonContext>
               <App />
            </PokemonContext>
         </React.StrictMode>,
         document.getElementById('root')
      );
   });
};