import React, {Fragment, useState, useCallback} from 'react'

import AddHeroButton from './../buttons/AddHeroButton'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import MenuItem from '@material-ui/core/MenuItem'
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

export default function AddHeroDialogContent() {
    const classes = useStyles()
    const [values, setValues] = useState({
        avatar_url: '',
        full_name: '',
        type_name: '',
        description: '',
    })
    const [buttonEabled, setButtonEnabled] = React.useState(false)

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
        setButtonEnabled(
            values.avatar_url.length > 0 &&
            values.full_name.length > 0 &&
            values.type_name.length > 0 &&
            values.description.length > 0
        )
    }

    const FetchAvatars = () => {
        const { loading, error, data } = useQuery(FETCH_HERO_AVATARS_URL)
        if (loading) return <MenuItem>Loading...</MenuItem>
        if (error) return <MenuItem>{ error.message }</MenuItem>

        return data.avatars.map(avatar =>
            <MenuItem key={avatar.id} value={avatar.avatar_url} name="avatar_url">
                {avatar.alt}
            </MenuItem>
        )
    }

    const FetchTypes = () => {
        const { loading, error, data } = useQuery(FETCH_HERO_TYPES_NAME)
        if (loading) return <MenuItem>Loading...</MenuItem>
        if (error) return <MenuItem>{ error.message }</MenuItem>

        return data.types.map(type =>
            <MenuItem key={type.id} value={type.name} name="type_name">
                {type.name}
            </MenuItem>
        )
    }

    return (
        <Fragment>
            <DialogContent dividers>
                <form noValidate autoComplete="off"
                      //onSubmit={this.add}
                >
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
                        SelectProps={() => ({
                            onChange: handleChange
                        })}
                    >
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
                        name="type_name"
                        id="type_name"
                        value={values.type_name}
                        className={classes.textField}
                        margin="dense"
                        fullWidth
                        select
                        SelectProps={() => ({
                            onChange: handleChange
                        })}
                    >
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
                <AddHeroButton disabled={!buttonEabled} newHero={values} />
            </DialogActions>
        </Fragment>
    )
}