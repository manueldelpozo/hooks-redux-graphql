import React, { useState } from 'react'

import ShowAddHeroDialogButton from './components/buttons/ShowAddHeroDialogButton'
import FetchHeroes from './components/list/FetchHeroes'
import LoadMoreButton from './components/buttons/LoadMoreButton'
import DialogAction from './components/dialogs/DialogAction'

import { INCREMENT_MORE_HEROES } from './constants/constants'

import './App.css'

export default function App() {
    const [rerender, setRerender] = useState(0)
    const [loadMoreHeroes, setLoadMoreHeroes] = useState(0)

    const onLoadMore = () => {
        setLoadMoreHeroes(loadMoreHeroes + INCREMENT_MORE_HEROES)
    }
    const onChangeList = () => {
        setRerender(rerender + 1)
    }

    return (
        <div className="App">
            <ShowAddHeroDialogButton />
            <FetchHeroes
                loadMoreHeroes={loadMoreHeroes}
                onDeleteHero={rerender}
            />
            <LoadMoreButton onLoadMore={onLoadMore}/>
            <DialogAction onDeleteHero={onChangeList} onAddHero={onChangeList} />
        </div>
    )
}
