import Helmet from 'react-helmet'

const defaultTitle = 'Pokemon'
const defaultThumbnail = 'https://raw.githubusercontent.com/dennyangestipratama/tokopedia-pokemon/173c67c1e5e16b97b5e961bbf013461786bc91c2/src/assets/pokeball.svg?token=AQWIFWVF2KZLCX5BR64XFO2736MI2'
const defaultURL = 'https://pokemon.dennyangesti.com/'
const defaultKeyword = 'pokemon, pikachu, tokopedia, game pokemon, catch pokemon'

const Meta = ({ title = '', description, url = defaultURL, image = defaultThumbnail, keywords = defaultKeyword }) => {
   return (
      <Helmet>
         <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
         <meta name='title' content={title} />
         <meta name='description' content={description} />

         <meta property='og:type' content='website' />
         <meta property='og:url' content={url} />
         <meta property='og:title' content={title} />
         <meta property='og:description' content={description} />
         <meta property='og:image' content={image} />

         <meta property='twitter:card' content='summary_large_image' />
         <meta property='twitter:url' content={url} />
         <meta property='twitter:title' content={title} />
         <meta property='twitter:description' content={description} />
         <meta property='twitter:image' content={image} />

         <meta name='keywords' content={keywords} />
         <meta name='robots' content='index, follow' />
         <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
         <meta name='language' content='English' />
         <meta name='revisit-after' content='7 days' />
         <meta name='author' content='Masagus Hariadi Arief' />
      </Helmet>
   )
}

export default Meta
