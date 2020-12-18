import { useState, Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { css } from "@emotion/css";

import { GET_POKEMONS_LIST } from "../../graphql/pokemons-list";
import PokemonCard from "./PokemonCard";

const Home = () => {
  const limit = 11;
  const [offset, setOffset] = useState(1);
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(GET_POKEMONS_LIST, {
    variables: { limit, offset },
  });

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
    setOffset((prevState) => prevState + 12);
  };

  const prevPage = () => {
    setPage((prevState) => prevState - 1);
    setOffset((prevState) => prevState - 12);
  };

  if (loading) return "Loading...";
  if (error) return `Error${error.message}`;

  return (
    <Fragment>
      <div className={home}>
        {data.pokemons.results.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className={home_page}>
        <button
          className={button}
          disabled={page === 1}
          onClick={() => prevPage()}
        >
          Previous
        </button>
        <span className={page_title}>{page}</span>
        <button
          className={button}
          disabled={offset === data.pokemons.count - 12}
          onClick={() => nextPage()}
        >
          Next
        </button>
      </div>
    </Fragment>
  );
};

const neutralColor = "#FFFFFF";
const darkColor = "#303C42";
const yellowColor = "#FFCB05";
const fontFamily = "Poppins, sans-serif";

const home = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
  columnGap: 20,
  rowGap: 20,
  padding: "120px 50px 30px",
  maxWidth: "1440px",
  margin: "0 auto",
});

const focus = css({
  outline: "none",
});

const hover = css({
  color: yellowColor,
});
const hoverDisabled = css({
  color: neutralColor,
});

const disabled = css({
  background: "grey",
  "&:hover": hoverDisabled,
});

const button = css({
  background: darkColor,
  padding: "12px 23px",
  border: "none",
  color: neutralColor,
  width: "100%",
  margin: "0 3rem",
  borderRadius: 20,
  fontFamily,
  fontsize: 18,
  fontWeight: "bold",
  lineHeight: "27px",
  cursor: "pointer",
  textTransform: "uppercase",
  "&:disabled": disabled,
  "&:focus": focus,
  "&:hover": hover,
});

const home_page = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  paddingBottom: 36,
});

const page_title = css({
  fontFamily,
  color: darkColor,
  fontWeight: "bold",
});

export default Home;
