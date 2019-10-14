import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { StoreContext } from 'redux-react-hook'
import { createStore } from 'redux'
import { reducers } from './store/reducers'

const store = createStore(reducers)

const customFetch = (uri, options) => {
    return fetch(uri, options)
        .then(response => {
            if (response.status >= 500) {
                return Promise.reject(response.status)
            }
            return response
        });
};

const cache = new InMemoryCache()
const link = new HttpLink({
    uri: 'http://localhost:4000/',
    fetch: customFetch,
});

const client = new ApolloClient({
    cache,
    link
});

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </StoreContext.Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
