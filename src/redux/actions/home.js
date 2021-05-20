import store from '../store'
import types from '../types';

const {dispatch} = store

export const addToCart = (newArr,index) => {
    console.log(newArr,"get array in actions")
    dispatch({
        type:types.ADD_TO_CART,
        payload: {newArr,index}
    })
}

export const deleteCart = (id) => {
    dispatch({
        type:types.DELETE_FROM_CART,
        payload:id
    })
}

export const incrementCart = (addedArray,index1) => {
    console.log(index1,"index1 Reached the actions")
    console.log(addedArray,"addedArray reached actions")
    dispatch({
        type:types.INCREMENT_CART,
        payload:{addedArray,index1}
    })
}

export const decrementCart = (cartArray2,index2) => {
    console.log(cartArray2,"cartArray2 reached actions")
    console.log(index2,"index2 reached actions")
    dispatch({
        type:types.DECREMENT_CART,
        payload:{cartArray2,index2}
    })
}