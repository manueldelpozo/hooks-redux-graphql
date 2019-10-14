import React, { Fragment, useState } from 'react'

import AddHeroButton from './../buttons/AddHeroButton'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'

import { useQuery } from '@apollo/react-hooks';
import { FETCH_HERO_AVATARS_URL, FETCH_HERO_TYPES_NAME } from '../../graphql/queries'

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

const useStyles = makeStyles(theme => ({
    textField: {
        margin: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}))

export default function AddHeroDialogContent({ onAddHero }) {
    const classes = useStyles()
    const [values, setValues] = useState({
        avatar_url: '',
        full_name: '',
        type: {
            name: ''
        },
        description: '',
    })
    const [buttonEnabled, setButtonEnabled] = React.useState(false)

    const handleChange = event => {
        const target = event.target
        let value;

        if (target.name === 'type') {
            value = {
                name: target.value
            }
        }

        setValues({
            ...values,
            [target.name]: value || target.value,
        })
        setButtonEnabled(
            values.avatar_url.length > 0 &&
            values.full_name.length > 0 &&
            values.type.name.length > 0 &&
            values.description.length > 0
        )
    }

    const reqAvatars = useQuery(FETCH_HERO_AVATARS_URL)
    const FetchAvatars = React.forwardRef(() => {
        const { loading, error, data } = reqAvatars
        if (loading) return <option>Loading...</option>
        if (error) return <option>{ error.message }</option>

        return data.avatars.map(avatar =>
            <option key={avatar.id} value={avatar.avatar_url} name="avatar_url">
                {avatar.alt}
            </option>
        )
    })

    const reqTypes = useQuery(FETCH_HERO_TYPES_NAME)
    const FetchTypes = React.forwardRef(() => {
        const { loading, error, data } = reqTypes
        if (loading) return <option>Loading...</option>
        if (error) return <option>{ error.message }</option>

        return data.types.map(type =>
            <option key={type.id} value={type.name} name="type">
                {type.name}
            </option>
        )
    })

    return (
        <Fragment>
            <DialogContent dividers>
                <form noValidate autoComplete="off">
                    <TextField
                        variant="outlined"
                        label="Avatar URL"
                        name="avatar_url"
                        id="avatar_url"
                        value={values.avatar_url}
                        className={classes.textField}
                        margin="dense"
                        fullWidth
                        select
                        SelectProps={{
                            native: true,
                            onChange: handleChange
                        }}
                    >
                        <option />
                        <FetchAvatars />
                    </TextField>
                    <TextField
                        variant="outlined"
                        label="Full Name"
                        id="full_name"
                        value={values.full_name}
                        className={classes.textField}
                        margin="dense"
                        fullWidth
                        name="full_name"
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Type"
                        name="type"
                        id="type"
                        value={values.type.name}
                        className={classes.textField}
                        margin="dense"
                        fullWidth
                        select
                        SelectProps={{
                            native: true,
                            onChange: handleChange
                        }}
                    >
                        <option />
                        <FetchTypes />
                    </TextField>
                    <TextField
                        variant="outlined"
                        label="Description"
                        id="description"
                        value={values.description}
                        className={classes.textField}
                        margin="dense"
                        fullWidth
                        name="description"
                        onChange={handleChange}
                        multiline
                        rowsMax="4"
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <AddHeroButton disabled={!buttonEnabled} newHero={values} onAddHero={onAddHero} />
            </DialogActions>
        </Fragment>
    )
}