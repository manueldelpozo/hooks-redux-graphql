import React, { useCallback } from 'react'
import { useDispatch } from 'redux-react-hook'
import { showDeleteHeroDialogAction } from "../../store/actions/dialogActions"

import { makeStyles } from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea'

const useStyles = makeStyles(theme => ({
    cardAction: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2),
    }
}))

export default function ShowDeleteHeroDialogButton(props) {
    const classes = useStyles()

    const dispatch = useDispatch()
    const showDialog = useCallback(() => dispatch(showDeleteHeroDialogAction(props.index)), [dispatch],)

    return (
        <CardActionArea onClick={showDialog} className={classes.cardAction}>
            { props.children }
        </CardActionArea>
    )
}