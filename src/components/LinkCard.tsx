import React, { FC } from "react";
import styled from "styled-components";

interface ILinkCard {
  url: string;
  title: string;
}

const LinkCardStyles = styled.a`
  position: relative;
  padding: 0.75rem 1rem;
  transition: all 0.2s ease-in-out;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    pointer-events: none;
    background-color: var(--blackcurrant);
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 0.3s, transform 0.3s;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }
`;

const LinkCard: FC<ILinkCard> = ({ title, url }) => {
  return (
    <LinkCardStyles href={url} target="_blank">
      {title}
    </LinkCardStyles>
  );
};

export default LinkCard;
