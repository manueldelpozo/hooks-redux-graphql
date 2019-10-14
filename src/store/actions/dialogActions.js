import { SHOW_ADD_HERO_DIALOG, SHOW_DELETE_HERO_DIALOG, HIDE_DIALOG } from './actionTypes';

export const showAddHeroDialogAction = () => ({
    type: SHOW_ADD_HERO_DIALOG,
})

export const showDeleteHeroDialogAction = (index) => ({
    type: SHOW_DELETE_HERO_DIALOG,
    index,
})

export const hideDialogAction = () => ({
    type: HIDE_DIALOG,
})