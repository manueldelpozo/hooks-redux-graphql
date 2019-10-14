import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import ShowDeleteHeroDialogButton from './../buttons/ShowDeleteHeroDialogButton'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2),
        cursor: 'pointer',
    },
    avatar: {
        margin: theme.spacing(1),
    },
    textCol1: {
        textAlign: 'left',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        flexBasis: '25%',
    },
    textCol2: {
        textAlign: 'left',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        flexBasis: '50%',
    },
}))

export default function HeroItem({ id, avatar_url, name, type, description }) {
    const classes = useStyles()

    return (
        <li className={classes.root}>
            <Card>
                <ShowDeleteHeroDialogButton index={id}>
                    <Avatar alt={name} src={avatar_url} className={classes.avatar} />
                    <Typography variant="body1" color="textPrimary" className={classes.textCol1}>
                        { name }
                    </Typography>
                    <Typography variant="body1" color="textSecondary" className={classes.textCol1}>
                        { type }
                    </Typography>
                    <Typography variant="body1" color="textSecondary" className={classes.textCol2}>
                        { description }
                    </Typography>
                </ShowDeleteHeroDialogButton>
            </Card>
        </li>
    )
}