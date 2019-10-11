import React from 'react'

import HeroList from './components/list/HeroList'
import ShowAddHeroDialogButton from './components/buttons/ShowAddHeroDialogButton'
import LoadMoreButton from './components/buttons/LoadMoreButton'
import DialogAction from './components/dialogs/DialogAction'

import './App.css'

import { FETCH_N_HEROES } from './graphql/heroes'
import { Query } from 'react-apollo'

export default function App() {
    return (
        <div className="App">
            <ShowAddHeroDialogButton />
            <Query query={FETCH_N_HEROES}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return <HeroList heroes={ data.heroes } />
                }}
            </Query>
            <LoadMoreButton />
            <DialogAction />
        </div>
    )
}
