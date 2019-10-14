import { PUT_N_HEROES, ADD_HERO, DELETE_HERO } from './actionTypes'
import uniqueId from 'lodash.uniqueid'

export const putHeroes = (payload) => ({
    type: PUT_N_HEROES,
    payload,
})

export const addHeroAction = (newHero) => {
    console.log(newHero)
    return {
    type: ADD_HERO,
    newHero: {
        ...newHero,
        id: uniqueId('new-hero-')
    },
}
}

export const deleteHeroAction = () => ({
    type: DELETE_HERO,
})