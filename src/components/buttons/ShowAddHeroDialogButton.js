import React, { useCallback } from 'react'
import { useDispatch } from 'redux-react-hook'
import { showAddHeroDialogAction } from './../../store/actions/dialogActions'

import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        zIndex: 10,
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}))

export default function ShowAddHeroDialogButton() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const showDialog = useCallback(() => dispatch(showAddHeroDialogAction()), [dispatch],)

    return (
        <Fab onClick={showDialog} color="secondary" aria-label="add" className={classes.root}>
            <AddIcon />
        </Fab>
    )
}