import React, { FC } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { LinkCard } from "../components";

const HeaderStyles = styled.div`
  padding: 0 1rem;
  margin-bottom: 2rem;
`;

const SocialWrapperStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DividerStyles = styled.small`
  margin: 0 0.5rem;
`;

interface IHome {
  data: {
    site: {
      siteMetadata: {
        author: string;
        description: string;
        social: {
          title: string;
          url: string;
        }[];
      };
    };
  };
}

const Home: FC<IHome> = ({ data }): JSX.Element => {
  const {
    site: {
      siteMetadata: { author, description, social },
    },
  } = data;

  return (
    <div>
      <HeaderStyles>
        <h1>{author}</h1>
        <p>{description}</p>
      </HeaderStyles>
      <SocialWrapperStyles>
        {social.map((item, i) => {
          const isLastItem = i === social.length - 1;

          return (
            <div key={i}>
              <LinkCard {...item} />
              {!isLastItem && <DividerStyles>/</DividerStyles>}
            </div>
          );
        })}
      </SocialWrapperStyles>
    </div>
  );
};

export default Home;

export const HomeQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        author
        description
        author
        description
        social {
          title
          url: link
        }
      }
    }
  }
`;
