import React from 'react';
import './App.css';

import { FETCH_N_HEROES } from './graphql/heroes'
import { Query } from 'react-apollo';

function App() {
  return (
      <Query query={FETCH_N_HEROES}>
          {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              return data.heroes.map(({
                  full_name,
                  avatar_url,
                  description
              }) =>
                  <p>
                      <span>{ full_name }</span>
                      <span>{ description }</span>
                  </p>
              );
          }}
      </Query>
  );
}

export default App;
