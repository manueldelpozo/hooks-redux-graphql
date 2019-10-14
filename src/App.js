import React, {useState, useCallback, useEffect} from 'react'

import ShowAddHeroDialogButton from './components/buttons/ShowAddHeroDialogButton'
import FetchHeroes from './components/list/FetchHeroes'
import LoadMoreButton from './components/buttons/LoadMoreButton'
import DialogAction from './components/dialogs/DialogAction'

import './App.css'

export default function App() {
    // const [loadMoreHeroes, setLoadMoreHeroes] = useState(0)
    // const onLoadMore = useCallback(() => {
    //     setLoadMoreHeroes(loadMoreHeroes + 5)
    // })
    //
    // const onDeleteHero = useCallback(() => {
    //     console.log('delete hero')
    // })
    //
    // useEffect(() => {
    //     const handler = (event) => {
    //         if (event.propertyName === "width") {
    //             //passe a function to state setter to get fresh state value
    //             changeTransitionStatus(transitionStatus => transitionStatus ? false : true);
    //         }
    //     };
    //
    //     window.addEventListener('deleteHero', handlerDeleteHero)
    //
    //     // clean up
    //     return () => window.removeEventListener("deleteHero", handlerDeleteHero);
    // }, [])

    return (
        <div className="App">
            <ShowAddHeroDialogButton />
            <FetchHeroes
                //loadMoreHeroes={loadMoreHeroes}
                //onDeleteHero={onDeleteHero}
            />
            <LoadMoreButton
                //onLoadMore={onLoadMore}
            />
            <DialogAction />
        </div>
    )
}
