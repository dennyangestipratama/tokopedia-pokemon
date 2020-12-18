import { css } from "@emotion/css";
import { useHistory } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  const history = useHistory();
  return (
    <div className={card}>
      <span className={title}>{pokemon.name}</span>
      <div className={cardImage}>
        <img src={pokemon.image} alt="pokemon" />
      </div>
      <span className={cardOwned}>owned: 0</span>
      <button
        className={css`
          ${button} &:hover {
            color: ${yellowColor};
          }
        `}
        onClick={() => history.push(`/pokemon/${pokemon.name}`)}
      >
        See Detail
      </button>
    </div>
  );
};

const yellowColor = "#FFCB05";
const redColor = "#E53935";
const neutralColor = "#FFFFFF";
const darkColor = "#303C42";
const blueColor = "#3C5AA6";

const fontFamily = "Poppins, sans-serif";

const card = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: redColor,
  border: `8px solid ${darkColor}`,
  borderRadius: 22,
});

const cardImage = css({
  background: neutralColor,
  border: `8px solid ${darkColor}`,
  borderRadius: 10,
  marginBottom: 25,
  padding: "10px",
});

const cardOwned = css({
  fontFamily,
  fontWeight: "bold",
  color: neutralColor,
  fontsize: 14,
  marginBottom: 25,
});

const button = css({
  background: darkColor,
  padding: "12px 23px",
  border: "none",
  color: neutralColor,
  borderRadius: 20,
  fontFamily,
  fontsize: 18,
  fontWeight: "bold",
  lineHeight: "27px",
  cursor: "pointer",
  textTransform: "uppercase",
  marginBottom: 36,
});

const title = css({
  display: "block",
  color: yellowColor,
  textTransform: "uppercase",
  fontSize: 32,
  fontWeight: "bold",
  lineHeight: "51px",
  padding: "15px 35px",
  WebkitTextStroke: 2,
  fontFamily,
  WebkitTextStrokeColor: blueColor,
});

export default PokemonCard;
