/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.graphassets.com"],
  },
  env: {
    GRAPHQL_CMS_API: process.env.GRAPHQL_CMS_API,
  },
};

module.exports = nextConfig;
