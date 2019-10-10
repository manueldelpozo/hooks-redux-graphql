import React from 'react';

import HeroList from './components/list/HeroList'

import './App.css';

import { FETCH_N_HEROES } from './graphql/heroes'
import { Query } from 'react-apollo';

function App() {
  return (
      <div className="App">
          <Query query={FETCH_N_HEROES}>
              {({ loading, error, data }) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>Error :(</p>;

                  return <HeroList heroes={ data.heroes } />
              }}
          </Query>
      </div>
  );
}

export default App;
