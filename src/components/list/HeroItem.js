import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2),
        cursor: 'pointer',
    },
    cardAction: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2),
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

export default function HeroItem({ avatar_url, name, type, description }) {
    const classes = useStyles()

    return (
        <li className={classes.root}>
            <Card>
                <CardActionArea className={classes.cardAction}>
                    <Avatar alt={ name } src={ avatar_url } className={classes.avatar} />
                    <Typography variant="body1" color="textPrimary" className={classes.textCol1}>
                        { name }
                    </Typography>
                    <Typography variant="body1" color="textSecondary" className={classes.textCol1}>
                        { type }
                    </Typography>
                    <Typography variant="body1" color="textSecondary" className={classes.textCol2}>
                        { description }
                    </Typography>
                </CardActionArea>
            </Card>
        </li>
    )
}