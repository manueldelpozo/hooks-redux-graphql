import React, { useCallback, useRef } from 'react'
import { useDispatch } from 'redux-react-hook'
import { deleteHeroAction } from './../../store/actions/heroActions'

import { makeStyles } from '@material-ui/core'
import Fab from '@material-ui/core/Fab/Fab'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 10,
        padding: theme.spacing(2),
        background: 'linear-gradient(to top, rgba(100, 100, 100, 1), rgba(100, 100, 100, 0))',
        textAlign: 'center',
    },
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}))

export default function DeleteHeroButton({ onDeleteHero }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const deleteHero = useCallback(() => {
        onDeleteHero()
        return dispatch(deleteHeroAction())
    }, [dispatch, onDeleteHero])

    return (
        <Fab
            onClick={ deleteHero }
            variant="extended"
            aria-label="delete"
            color="primary"
            className={classes.fab}
        >
            <DeleteIcon className={classes.extendedIcon} />
            Delete Hero
        </Fab>
    )
}