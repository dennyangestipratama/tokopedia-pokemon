import { css, keyframes } from "@emotion/css";
import { Link } from "react-router-dom";

import { ReactComponent as Pokeball } from "../assets/pokeball.svg";

const Header = () => {
  return (
    <div className={header}>
      <Link className={text} exact to="/">
        <Pokeball className={icon} />
      </Link>
      <Link className={text} to="/mine">
        Inventory
      </Link>
    </div>
  );
};

const redColor = "#E53935";
const darkColor = "#303C42";
const yellowColor = "#FFCB05";
const blueColor = "#3C5AA6";
const fontFamily = "Poppins, sans-serif";

const spin = keyframes`
from {
   transform: rotate(0deg)
}
to {
   transform: rotate(360deg)
}
`;

const hover = css({
  animation: `3s ${spin} linear infinite`,
  left: "45%",
});

const header = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  position: "relative",
  background: redColor,
  minHeight: 120,
  borderBottom: `6px solid ${darkColor}`,
});

const text = css({
  fontFamily,
  textTransform: "uppercase",
  textDecoration: "none",
  fontSize: 36,
  fontWeight: "bold",
  color: yellowColor,
  WebkitTextStrokeColor: blueColor,
  WebkitTextStrokeWidth: "2px",
});

const icon = css({
  width: 150,
  height: 150,
  position: "absolute",
  top: "50px",
  left: "50%",
  transform: "translateX(-50%)",
  cursor: "pointer",
  "&:hover": hover,
});

export default Header;
