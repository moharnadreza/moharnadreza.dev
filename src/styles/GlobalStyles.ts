import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #04000A;
    --white: #FFFFFF;
    --pink: #FF67E1;
    --purple: #431A89;
    --violet: #9147FF;
    --gray: #7B797E;
    --blackcurrant: #170A2D;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: var(--violet) var(--black);
  }

  *::-webkit-scrollbar {
    width: 8px;
    height: 9px;
  }

  *::-webkit-scrollbar-track {
    background: var(--black);
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 6px;
    border: 3px solid var(--black);
    background-color: var(--violet) ;
  }

  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: var(--black);
  }

  ::-moz-selection {
    color: var(--violet);
    background: transparent;
  }

  ::selection {
    color: var(--violet);
    background: transparent;
  }

  #___gatsby {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyles;
