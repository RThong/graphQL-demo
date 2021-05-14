import styles from './index.less';

import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

import { gql } from '@apollo/client';

// const client = ...
const GET_DATA = gql`
  query {
    hello
  }
`;

function IndexPage() {
  const { loading, error, data } = useQuery(GET_DATA);

  console.log(loading, error, data);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <IndexPage />
    </ApolloProvider>
  );
}
