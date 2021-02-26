import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
  html,
  body {
    font: 9px/1.75 "Quicksand";
    font-variation-settings: "wght" 500;
    font-weight: normal;
    font-smooth: initial;
    color: var(--white);
    font-variation-settings: "wght" 700;
    font-weight: 700;
  }

  h1 {
    margin: 0;
  }

  h1 {
    margin-top: 0;
    font-size: 2.488rem;
    font-size: clamp(1.728rem, 5vw, 2.488rem);
  }

  p {
    font-size: 1.728rem;
    font-size: clamp(1.2rem, 5vw, 1.728rem);
    margin: 0;
  }

  small {
    font-size: 1.2rem;
    font-size: clamp(1rem, 5vw, 1.2rem);
  }

  a {
    font-size: 1.728rem;
    font-size: clamp(1.2rem, 5vw, 1.728rem);
    color: inherit;
  }

  a,
  a:hover {
    text-decoration: none;
    outline: none;
    border: none;
  }

  a:hover {
    color: var(--pink);
  }
`;

export default Typography;
