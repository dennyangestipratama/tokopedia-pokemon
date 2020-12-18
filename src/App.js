import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { Global, css as cssReset } from "@emotion/react";
import { css } from "@emotion/css";
import emotionReset from "emotion-reset";
import ApolloClient from "apollo-boost";

import Header from "./layouts/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import MyPokemon from "./pages/MyPokemon";

const App = () => {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
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
        <main className={main}>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/pokemon/:name" component={Detail} />
          <Route path="/mine" component={MyPokemon} />
          <Route path="/asdasd" component={MyPokemon} />
          <Route path="/qweqwe" component={MyPokemon} />
        </main>
      </Router>
    </ApolloProvider>
  );
};

const main = css({
  maxWidth: "1440px",
  margin: "auto",
  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
});

export default App;
