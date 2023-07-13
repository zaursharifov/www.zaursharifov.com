/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.graphassets.com"],
  },
  env: {
    GRAPHQL_CMS_API: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cljr5v0nv09y901tc4sb456vd/master',
  },
};

module.exports = nextConfig;
