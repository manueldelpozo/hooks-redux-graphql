import React, { useCallback } from 'react'
import { useDispatch } from 'redux-react-hook'
import { addHeroAction } from './../../store/actions/heroActions'

import { makeStyles } from '@material-ui/core'
import Fab from '@material-ui/core/Fab/Fab'
import AddIcon from '@material-ui/icons/Add'

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

export default function AddHeroButton({ disabled, newHero }) {
    const classes = useStyles()
    const dispatch = useDispatch();
    const addHero = useCallback(() => dispatch(addHeroAction(newHero)), [dispatch],)

    return (
        <Fab
            onClick={addHero}
            variant="extended"
            aria-label="add"
            color="primary"
            className={classes.fab}
            disabled={disabled}
        >
            <AddIcon className={classes.extendedIcon} />
            Add
        </Fab>
    )
}