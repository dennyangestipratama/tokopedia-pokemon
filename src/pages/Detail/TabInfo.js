import { css } from '@emotion/css'

const TabInfo = ({ pokemon }) => {
   return (
      <div className='tab-responsive'>
         <div className={type}>
            <div className={title}>Type :</div>
            {pokemon.types.map((item, index) => (
               <div key={index} className={type_title}>{pokemon.types.length === index + 1 ? item.type.name : item.type.name.concat(',\xa0')}</div>
            ))}
         </div>
         <div className={status}>
            {pokemon.stats.map((item, index) => (
               <div key={index} className={status_wrapper}>
                  <div className={status_title}>{item.stat.name.replace('-', '\xa0')} :</div>
                  <div className={status_value}>{item.base_stat}</div>
               </div>
            ))}
         </div>
      </div>
   )
}

const fontFamily = 'Poppins, sans-serif'

const type = css({
   display: 'flex',
   alignItems: 'center',
   marginTop: 10,
   marginBottom: 20,
})

const status = css({
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   columnGap: '100px',
   rowGap: '10px',
})

const status_wrapper = css({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
})

const status_value = css({
   fontFamily,
   textShadow: '2px 2px 0px rgba(0, 0, 0, 0.25)',
   fontWeight: 'bold',
   fontSize: 20,
   lineHeight: '30px',
   letterSpacing: '0.1em',
})

const type_title = css({
   fontFamily,
   textTransform: 'uppercase',
   lineHeight: '15px',
   letterSpacing: '0.2em',
   fontSize: 10,
   fontWeight: '500',
})

const title = css({
   fontFamily,
   marginRight: 35,
   fontSize: 12,
   lineHeight: '18px',
})

const status_title = css({
   fontFamily,
   textTransform: 'uppercase',
   fontFamily,
   fontSize: 12,
   lineHeight: '18px',
})

export default TabInfo
