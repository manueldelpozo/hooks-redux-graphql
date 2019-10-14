import React, { Fragment, useCallback } from 'react'

import DeleteHeroButton from './../buttons/DeleteHeroButton'

import { makeStyles, withStyles } from "@material-ui/core"
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import {useMappedState} from "redux-react-hook"
import Avatar from "@material-ui/core/Avatar/Avatar"
import Typography from "@material-ui/core/Typography/Typography"

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    avatar: {
        margin: `${theme.spacing(1)}px auto`,
    },
}))

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
    root: {
        margin: '0 auto',
        padding: theme.spacing(1),
    },
}))(MuiDialogActions)

export default function DeleteHeroDialogContent({ onDeleteHero }) {
    const classes = useStyles()

    const mapState = useCallback(
        state => ({
            heroes: state.heroes,
            heroToDeleteId: state.heroToDeleteId,
        })
    )
    const { heroes, heroToDeleteId } = useMappedState(mapState);
    const heroToDelete = heroes && heroes.filter(hero => hero.id === heroToDeleteId)
    const { avatar_url, full_name, type, description } = heroToDelete[0]

    return (
        <Fragment>
            <DialogContent dividers>
                <Avatar alt={ full_name } src={ avatar_url } className={classes.avatar} />
                <Typography variant="body1" color="textPrimary" gutterBottom>
                    { full_name }
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    { type && type.name }
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    { description }
                </Typography>
            </DialogContent>
            <DialogActions>
                <DeleteHeroButton onDeleteHero={onDeleteHero} />
            </DialogActions>
        </Fragment>
    )
}