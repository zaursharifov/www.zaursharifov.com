/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.graphassets.com"],
    unoptimized: true
  },
  output: 'export',
  env: {
    GRAPHQL_CMS_API: process.env.GRAPHQL_CMS_API,
  },
  exportTrailingSlash: true,
};

module.exports = nextConfig;
