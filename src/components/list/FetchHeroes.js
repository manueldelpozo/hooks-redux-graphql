import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import HeroList from './HeroList'

import { INITIAL_LOADED_HEROES } from '../../constants/constants'

import { useDispatch, useMappedState } from 'redux-react-hook'
import { putHeroes } from './../../store/actions/heroActions'

import { useQuery } from '@apollo/react-hooks'
import { FETCH_N_HEROES } from './../../graphql/queries'

const useStyles = makeStyles(theme => ({
    superCentered: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
}));

const ErrorPage = () =>
    <Container maxWidth="sm">
        <Typography component="h1" style={{ height: '100vh' }}>
            OOPS!
            We can't find the page you're looking for
        </Typography>
    </Container>


export default function FetchHeroes({ loadMoreHeroes, rerender }) {
    const classes = useStyles()

    const [ isLoading, setIsLoading ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')

    const dispatch = useDispatch()
    const req = useQuery(FETCH_N_HEROES, {
        variables: {
            first: INITIAL_LOADED_HEROES,
            skip: loadMoreHeroes,
        },
    })

    const getPayLoad = ({ loading, error, data }) => ({
        isLoading: loading,
        errorMessage: error && error.message,
        newLoadedHeroes: data && data.heroes || [],
    })

    useEffect(() => {
        const payload = getPayLoad(req)

        setIsLoading(payload.isLoading)
        setErrorMessage(payload.errorMessage)
        if (!payload.isLoading) {
            dispatch(putHeroes(payload))
        }
    }, [req, dispatch, loadMoreHeroes])

    // useEffect(() => {
    //     if (loadMoreHeroes > 0) {
    //         const payload = getPayLoad(req)
    //
    //         setIsLoading(payload.isLoading)
    //         setErrorMessage(payload.errorMessage)
    //         //setHeroes([...heroes, ...payload.heroes])
    //         console.log('loadmore', payload)
    //
    //         // dispatch({
    //         //     type: 'LOAD_MORE_HEROES',
    //         //     payload: payload
    //         // })
    //
    //         setDisplayedHeroes(displayedHeroes + loadMoreHeroes)
    //     }
    // }, [loadMoreHeroes])

    //console.log('heroes?',heroes)

    if (isLoading) return <CircularProgress className={classes.superCentered} />
    if (errorMessage) return <ErrorPage />

    return  <HeroList rerender={rerender} />
}