import {
    SHOW_ADD_HERO_DIALOG,
    SHOW_DELETE_HERO_DIALOG,
    HIDE_DIALOG,
    PUT_N_HEROES,
    ADD_HERO,
    DELETE_HERO,
} from './actions/actionTypes'

const initialState = {
    isLoading: false,
    errorMessage: '',
    heroes: [],
    newLoadedHeroes: [],
    heroToDeleteId: 0,
    dialog: {
        open: false,
        type: ''
    }
}

const openDialog = type => ({
    open: true,
    type
})

const closeDialog = () => ({
    open: false,
    type: null
})

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case PUT_N_HEROES:
            return {
                ...state,
                ...action.payload,
                heroes: [
                    ...state.heroes,
                    ...action.payload.newLoadedHeroes,
                ]
            }
        case ADD_HERO:
            return {
                ...state,
                heroes: [
                    ...action.newHero,
                    ...state.heroes,
                ],
                dialog: closeDialog(),
            }
        case DELETE_HERO:
            return {
                ...state,
                dialog: closeDialog(),
                heroes: state.heroes.filter(hero => hero.id !== state.heroToDeleteId)
            }
        case SHOW_ADD_HERO_DIALOG:
            return {
                ...state,
                dialog: openDialog('addHero'),
            }
        case SHOW_DELETE_HERO_DIALOG:
            return {
                ...state,
                heroToDeleteId: action.index,
                dialog: openDialog('deleteHero'),
            }
        case HIDE_DIALOG:
            return {
                ...state,
                dialog: closeDialog(),
            }
        default:
            return { ...state }
    }
}