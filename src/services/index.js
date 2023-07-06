import { request, gql } from "graphql-request";

export const getProjects = async () => {
  const query = gql`
    query Assets {
      projectsConnection {
        edges {
          node {
            github
            id
            live
            name
            url
            description
          }
        }
      }
      bookmarksConnection {
        edges {
          node {
            desc
            id
            link
            name
          }
        }
      }
    }
  `;
};
