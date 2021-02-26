import React from "react";
import { Layout } from "./src/components";

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
