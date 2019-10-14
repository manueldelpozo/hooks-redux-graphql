import React, { useCallback, useMemo } from 'react'
import { useMappedState } from 'redux-react-hook'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import HeroItem from './HeroItem'

const useStyles = makeStyles(theme => ({
    header: {
        marginLeft: theme.spacing(3),
        paddingTop: theme.spacing(10),
    },
    list: {
        listStyle: 'none',
        paddingLeft: 0,
        marginBottom: theme.spacing(10),
    },
}))

export default function HeroList() {
    const classes = useStyles()

    const mapState = useCallback(
        state => ({
            heroes: state.heroes,
        })
    )
    const { heroes } = useMappedState(mapState)

    const renderListWithMemo = useMemo(
        () =>
            heroes.map(hero =>
                <HeroItem
                    key={ hero.id }
                    id={ hero.id }
                    avatar_url={ hero.avatar_url }
                    name={ hero.full_name }
                    type={ hero.type.name }
                    description={ hero.description }
                />
            ),
        [heroes]
    )

    return (
        <React.Fragment>
            <Grid container spacing={3} className={classes.header}>
                <Grid item xs={3}>
                    <Typography variant="caption" color="textSecondary">
                        Heroes
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="caption" color="textSecondary">
                        Type
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="caption" color="textSecondary">
                        Description
                    </Typography>
                </Grid>
            </Grid>
            <ul className={classes.list}>
                {renderListWithMemo}
            </ul>
        </React.Fragment>
    )
}