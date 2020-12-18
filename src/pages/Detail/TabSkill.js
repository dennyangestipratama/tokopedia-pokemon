import { Fragment } from "react";
import { css } from "@emotion/css";

const TabSkill = ({ pokemon }) => {
  return (
    <Fragment>
      <div className={title}>Move: </div>
      <div className={move}>
        {pokemon.moves.slice(0, 10).map((item) => (
          <div className={move_title}>{item.move.name.replace("-", " ")}</div>
        ))}
      </div>
    </Fragment>
  );
};

const fontFamily = "Poppins, sans-serif";

const title = css({
  fontFamily,
  marginRight: 35,
  fontSize: 12,
  marginBottom: 15,
  marginTop: 10,
  lineHeight: "18px",
});

const move = css({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "100px",
  rowGap: "10px",
});

const move_title = css({
  fontFamily,
  textTransform: "uppercase",
  lineHeight: "15px",
  letterSpacing: "0.2em",
  fontSize: 10,
  fontWeight: "500",
});

export default TabSkill;
