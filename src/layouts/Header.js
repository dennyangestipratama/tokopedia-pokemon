import { css, keyframes } from '@emotion/css'
import { NavLink } from 'react-router-dom'

import { ReactComponent as Pokeball } from '../assets/pokeball.svg'

const Header = () => {
   return (
      <div className={header}>
         <NavLink className={text} exact to='/' >
            Home
         </NavLink>
         <Pokeball className={css`${icon} &:hover{animation: 3s ${spin} linear infinite}`} />
         <NavLink className={text} to='/mine' >
            Inventory
         </NavLink>
      </div>
   )
}

const spin = keyframes`
from {
   transform: rotate(0deg)
}
to {
   transform: rotate(360deg)
}
`

const redColor = '#E53935'
const darkColor = '#303C42'
const yellowColor = '#FFCB05'
const blueColor = '#3C5AA6'

const fontFamily = 'Poppins, sans-serif'

const header = css({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   position: 'relative',
   background: redColor,
   minHeight: 120,
   borderBottom: `6px solid ${darkColor}`,
})

const text = css({
   fontFamily,
   textTransform: 'uppercase',
   textDecoration: 'none',
   fontSize: 36,
   fontWeight: 'bold',
   color: yellowColor,
   WebkitTextStrokeColor: blueColor,
   WebkitTextStrokeWidth: '2px'
})

const icon = css({
   width: 150,
   height: 150,
   position: 'absolute',
   top: '50px',
   cursor: 'pointer'
})

export default Header