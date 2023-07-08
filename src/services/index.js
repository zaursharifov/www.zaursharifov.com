import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHQL_CMS_API;

export const getProjects = async () => {
  const query = gql`
    query MyQuery {
      projects {
        description
        github
        id
        live
        name
        url
        detail {
          html
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.projectsConnection.edges;
};
