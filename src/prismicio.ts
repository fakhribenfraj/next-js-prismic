import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

import sm from "../slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const { repositoryName } = sm;

/**
 * The project's Prismic Route Resolvers. This list determines a Prismic document's URL.
 *
 * @type {prismic.ClientConfig['routes']}
 */
const routes = [
  {
    type: "article",
    path: "/articles/:uid",
  },
  {
    type: "page",
    path: "/:uid",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = ({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    fetchOptions: {
      cache: process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      next: { tags: ["prismic"] },
    },
    routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
};
