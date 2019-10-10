import React from 'react'

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

export default function ButtonSizes() {
    const classes = useStyles()

    return (
        <Fab color="secondary" aria-label="add" className={classes.root}>
            <AddIcon />
        </Fab>
    )
}