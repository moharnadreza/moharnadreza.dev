import React, { FC } from "react";
import styled from "styled-components";

import { GlobalStyles, Typography } from "../styles";
import SEO from "./Seo";

const LayoutStyles = styled.div`
  max-width: 50vw;
  max-width: clamp(100vw, 5vw, 50vw);
  height: calc(100vh - 16rem);
  margin: auto;
  padding: 8rem;
  padding: clamp(2rem, 5vw, 8rem);
  display: grid;
  place-items: center;
`;

const Layout: FC = ({ children }): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SEO />
      <LayoutStyles>{children}</LayoutStyles>
    </>
  );
};

export default Layout;
