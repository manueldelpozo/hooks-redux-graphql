import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import NavigationIcon from '@material-ui/icons/Navigation';

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
        transform: 'rotate(180deg)',
    },
}));

export default function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab variant="extended" aria-label="delete" color="primary" className={classes.fab}>
                <NavigationIcon className={classes.extendedIcon} />
                Load more
            </Fab>
        </div>
    );
}