import React, {useState, useEffect, useCallback} from 'react'

import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import HeroList from './HeroList'

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


export default function FetchHeroes({ loadMoreHeroes }) {
    const classes = useStyles()

    const initialLoadHeroes = 5

    const [ isLoading, setIsLoading ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')
    const [ heroes, setHeroes ] = useState([])
    const [ displayedHeroes, setDisplayedHeroes ] = useState(initialLoadHeroes)

    const dispatch = useDispatch()
    const req = useQuery(FETCH_N_HEROES, {
        variables: {
            first: displayedHeroes,
            skip: loadMoreHeroes,
        },
    })

    const getPayLoad = ({ loading, error, data }) => ({
        isLoading: loading,
        errorMessage: error && error.message,
        heroes: data && data.heroes,
        displayedHeroes: data && data.heroes && data.heroes.length + loadMoreHeroes,
    })

    useEffect(() => {
        //if (loadMoreHeroes) setDisplayedHeroes(displayedHeroes + loadMoreHeroes)
        const payload = getPayLoad(req)

        setIsLoading(payload.isLoading)
        setErrorMessage(payload.errorMessage)
        setHeroes(payload.heroes)

        dispatch(putHeroes(payload))
    }, [req, dispatch, ])

    useEffect(() => {
        if (loadMoreHeroes > 0) {
            setDisplayedHeroes(displayedHeroes + loadMoreHeroes, () => {
                const payload = getPayLoad(req)

                setIsLoading(payload.isLoading)
                setErrorMessage(payload.errorMessage)
                setHeroes([...heroes, ...payload.heroes])

                dispatch({
                    type: 'LOAD_MORE_HEROES',
                    payload: payload
                })
            })
        }
    }, [loadMoreHeroes])

    // const mapState = useCallback(
    //     state => ({
    //         newLoadedHeroes: state.newLoadedHeroes,
    //         heroes: state.heroes,
    //     })
    // );
    // const { heroes, newLoadedHeroes } = useMappedState(mapState);
    console.log('heroes?',heroes)

    if (isLoading) return <CircularProgress className={classes.superCentered} />
    if (errorMessage) return <ErrorPage />

    return  <HeroList heroes={heroes} />
}