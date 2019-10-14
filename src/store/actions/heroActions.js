import { PUT_N_HEROES, ADD_HERO, DELETE_HERO } from './actionTypes'
import uniqueId from 'lodash.uniqueid'

export const putHeroes = (payload) => ({
    type: PUT_N_HEROES,
    payload,
})

export const addHeroAction = (payload) => ({
    type: ADD_HERO,
    payload: {
        ...payload,
        id: uniqueId('new-hero-')
    } || {},
})

export const deleteHeroAction = () => ({
    type: DELETE_HERO,
})