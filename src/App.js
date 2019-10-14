import React, {useState, useCallback, useEffect} from 'react'

import ShowAddHeroDialogButton from './components/buttons/ShowAddHeroDialogButton'
import FetchHeroes from './components/list/FetchHeroes'
import LoadMoreButton from './components/buttons/LoadMoreButton'
import DialogAction from './components/dialogs/DialogAction'

import './App.css'

export default function App() {
    const [rerender, setRerender] = useState(0)
    const [loadMoreHeroes, setLoadMoreHeroes] = useState(0)

    const onLoadMore = () => {
        setLoadMoreHeroes(loadMoreHeroes + 5)
    }
    const onDeleteHero = () => {
        console.log('delete hero')
        setRerender(rerender + 1)
    }

    return (
        <div className="App">
            <ShowAddHeroDialogButton />
            <FetchHeroes
                loadMoreHeroes={loadMoreHeroes}
                onDeleteHero={onDeleteHero}
            />
            <LoadMoreButton onLoadMore={onLoadMore}/>
            <DialogAction onDeleteHero={onDeleteHero} />
        </div>
    )
}
