import React, { useCallback } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'

import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

import AddHeroDialogContent from "./AddHeroDialogContent";
import DeleteHeroDialogContent from "./DeleteHeroDialogContent";

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
})

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )
})

export default function DialogAction() {
    const dispatch = useDispatch()
    const handleClose = useCallback(() => dispatch({type: 'HIDE_DIALOG'}))

    const mapState = useCallback(
        state => ({
            dialogOpen: state.dialog.open,
            dialogType: state.dialog.type,
        })
    );
    const { dialogOpen, dialogType } = useMappedState(mapState);

    const setTitle = (type) => {
        switch(type) {
            case 'addHero':
                return 'Add Hero'
            case 'deleteHero':
                return 'Delete Hero'
            default:
                return null
        }
    }

    const renderDialogContent = (type) => {
        switch(type) {
            case 'addHero':
                return <AddHeroDialogContent />
            case 'deleteHero':
                return <DeleteHeroDialogContent />
            default:
                return null
        }
    }

    return (
        <Dialog
            open={ dialogOpen }
            onClose={ handleClose }
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="customized-dialog-title" onClose={ handleClose }>
                { setTitle(dialogType) }
            </DialogTitle>
            { renderDialogContent(dialogType) }
        </Dialog>
    )
}

