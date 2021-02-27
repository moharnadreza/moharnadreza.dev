import React, { FC } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { LinkCard } from "../components";

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

const SocialLinkStyles = styled.div`
  margin-bottom: 1rem;
`;

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
            <SocialLinkStyles key={i}>
              <LinkCard {...item} />
              {!isLastItem && <DividerStyles>/</DividerStyles>}
            </SocialLinkStyles>
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
