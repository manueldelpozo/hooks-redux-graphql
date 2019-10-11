import React, { Fragment } from 'react'

import AddHeroButton from './../buttons/AddHeroButton'

import {withStyles} from "@material-ui/core";
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions)

export default function AddHeroDialogContent() {
    return (
        <Fragment>
            <DialogContent dividers>
                This is the content
            </DialogContent>
            <DialogActions>
                {/*<AddHeroButton />*/}
                <button />
            </DialogActions>
        </Fragment>
    )
}