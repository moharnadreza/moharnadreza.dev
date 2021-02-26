import React, { FC } from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface ISEO {
  lang?: string;
}

const SEO: FC<ISEO> = ({ lang = `en` }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            author
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.author}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
      ]}
    >
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
      ></link>
      {/* TODO: Fix font import method */}
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  );
};

export default SEO;
