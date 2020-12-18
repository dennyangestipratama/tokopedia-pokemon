import { css } from "@emotion/css";

const pokedex = [];

const TabCatch = ({ pokemon }) => {
  return (
    <div>
      {pokedex.length === 0 ? (
        <div className={empty_title}>You don't have any of this Pokemon</div>
      ) : (
        <div>halo</div>
      )}
    </div>
  );
};

const fontFamily = "Poppins, sans-serif";

const empty_title = css({
  fontFamily,
  textTransform: "uppercase",
  lineHeight: "15px",
  letterSpacing: "0.2em",
  fontSize: 10,
  fontWeight: "500",
  marginTop: 60,
});

export default TabCatch;
