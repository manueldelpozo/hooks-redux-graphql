import React, { useState } from 'react';

import HeroList from './components/list/HeroList'
import AddHeroButton from './components/buttons/AddHeroButton'
import LoadMoreButton from './components/buttons/LoadMoreButton'
import DialogWrapper from './components/dialogs/DialogWrapper'
import AddHeroDialogContent from './components/dialogs/AddHeroDialogContent'
import DeleteHeroDialogContent from './components/dialogs/DeleteHeroDialogContent'

import './App.css'

import { FETCH_N_HEROES } from './graphql/heroes'
import { Query } from 'react-apollo'

export default function App() {
    const [dialog, setDialog] = useState({
        open: false,
        type: ''
    })

    const renderDialogContent = (type) => {
        switch(type) {
            case 'addHero':
                return <AddHeroDialogContent />
            case 'deleteHero':
                return <DeleteHeroDialogContent />
            default:
                return null
        }
    }

    const openAddHeroDialog = () => {
        setDialog({
            open: true,
            type: 'addHero'
        })
    }

    return (
        <div className="App">
            <AddHeroButton onClick={ openAddHeroDialog } />
            <Query query={FETCH_N_HEROES}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return <HeroList heroes={ data.heroes } />
                }}
            </Query>
            <LoadMoreButton />
            <DialogWrapper open={ dialog.open }>
                { renderDialogContent(dialog.type) }
            </DialogWrapper>
        </div>
    )
}
