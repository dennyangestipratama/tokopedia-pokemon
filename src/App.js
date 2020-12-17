import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const App = () => {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <p>I'm a Pokemon</p>
      </main>
    </ApolloProvider>
  );
};

export default App;
