import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_GQL,
  cache: new InMemoryCache()
});

export const GET_POSTS = gql`
  query($start: Int, $limit: Int, $title: String, $tag: String) {
    posts(
      start: $start
      limit: $limit
      where: { title_contains: $title, tag: $tag }
    ) {
      id
      title
      tag
      slug
      date
      content
      image {
        url
      }
    }
  }
`;

export const GET_ABOUT = gql`
  query {
    page(id: 1) {
      title
      date
      content
      image {
        url
      }
    }
  }
`;
