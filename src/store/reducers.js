const initialState = {
    displayHeroes: 10,
    heroes: [],
    dialog: {
        open: false,
        type: ''
    }
}

export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_ADD_HERO_DIALOG':
            return {
                ...state,
                dialog: {
                    open: true,
                    type: 'addHero'
                }
            }
        case 'SHOW_DELETE_HERO_DIALOG':
            return {
                ...state,
                dialog: {
                    open: true,
                    type: 'deleteHero'
                }
            }
        case 'HIDE_DIALOG':
            return {
                ...state,
                dialog: {
                    open: false,
                    type: null
                }
            }

        default:
            return { ...state }
    }
}

// export const heroReducer = (state, action) => {
//     switch (action.type) {
//         case 'FETCH_N_HEROS':
//             return {
//                 ...heroes,
//                 heroes: newHeroes
//             }
//         case 'ADD_HERO':
//             return {
//                 ...heroes,
//             }
//
//         default:
//             return state
//     }
// }