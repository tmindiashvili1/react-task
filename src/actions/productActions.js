import {
    ADD_NEWS_PRODUCTS,
    PRODUCTS,
    CHECK_PRODUCTS
} from './actionTypes'

export const addNewProducts = (payload) => {
    return {
        type: ADD_NEWS_PRODUCTS,
        payload
    }
}

export const products = (payload) => {
    return {
        type: PRODUCTS,
        payload
    }
}

export const checkProducts = (payload) => {
    return {
        type: CHECK_PRODUCTS,
        payload
    }
}