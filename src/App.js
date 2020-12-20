import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { Global, css as cssReset } from '@emotion/react'
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { css } from '@emotion/css'
import Loadable from 'react-loadable';
import emotionReset from 'emotion-reset'
import ApolloClient from 'apollo-client';

const Header = Loadable({
   loader: () => import(/* webpackChunkName: "HeaderChunk" */ './layouts/Header'),
   loading: () => null
})

const Home = Loadable({
   loader: () => import(/* webpackChunkName: "HomeChunk" */'./pages/Home'),
   loading: () => null
})

const Detail = Loadable({
   loader: () => import(/* webpackChunkName: "DetailChunk" */'./pages/Detail'),
   loading: () => null
})

const MyPokemon = Loadable({
   loader: () => import(/* webpackChunkName: "MyPokemonChunk" */'./pages/MyPokemon'),
   loading: () => null
})

const App = () => {

   const customFetch = (uri, options) => {
      return fetch(uri, options)
         .then(response => {
            if (response.status >= 500) {  // or handle 400 errors
               return Promise.reject(response.status);
            }
            return response;
         });
   };

   const client = new ApolloClient({
      link: createHttpLink({
         uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
         fetch: customFetch,
      }),
      cache: new InMemoryCache()
   });

   return (
      <ApolloProvider client={client}>
         <Router>
            <Global
               styles={cssReset`
          ${emotionReset}
            *, *::after, *::before {
              box-sizing: border-box;
              -moz-osx-font-smoothing: grayscale;
              -webkit-font-smoothing: antialiased;
              font-smoothing: antialiased;
            }
          `}
            />
            <div className={main}>
               <Header />
               <Route exact path='/' component={Home} />
               <Route path='/pokemon/:name' component={Detail} />
               <Route path='/mine' component={MyPokemon} />
               <Route path='/asdasd' component={MyPokemon} />
               <Route path='/qweqwe' component={MyPokemon} />
            </div>
         </Router>
      </ApolloProvider>
   )
}

const main = css({
   maxWidth: '1440px',
   margin: 'auto',
   boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
})

export default App
