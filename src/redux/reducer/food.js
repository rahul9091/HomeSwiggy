
import { showMessage } from 'react-native-flash-message'
import ActionTypes from '../types'


const initialState = {
    newFoodAry:[],
    totalAmount:0,
    discountAmount:0

}

export default foodReducer = (state=initialState,action) => {
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
        const {newArr,index} = action.payload;
        console.log(newArr,"got in the food reducer")



        if(!state.newFoodAry.includes(newArr[index])) {
        let newArr1 = [...state.newFoodAry,newArr[index]]
        console.log(newArr1,"got item till here")
        newArr[index].quantity += 1;
        console.log(newArr1,'got our new Updated Array')
        console.log(newArr,'got the item price in reducer')
        const amount = newArr[index].price1
        console.log(amount,'got The price in the reducer')
        const discount = newArr[index].price2
        console.log(discount,'got discount in the reducer')
        return {...state,
            newFoodAry:[...newArr1],
            totalAmount:newArr[index].price1,
            discountAmount:newArr[index].price2
        }
        }
        else{
            showMessage({
                type:"warning",
                icon:"warning",
                message:'Already in the Car'
            })
        }
        case ActionTypes.DELETE_FROM_CART:
            let addedAry = state.newFoodAry
            console.log(addedAry,"item in cart in reducer")
            const id = action.payload
            console.log(id,'got id in the reducer')
            // let indexx = addedAry.findIndex((item)=> item.id === id)
            // console.log(indexx,'got index in reducer')
            // addedAry[indexx].quantity =+ 0
            const finalArray = addedAry.filter((item)=> item.id !== id)
            return {
                ...state,
                newFoodAry:[...finalArray],
                discountAmount:0,
                totalAmount:0

            }
            case ActionTypes.INCREMENT_CART:
                const {addedArray,index1} = action.payload;
                // console.log(index1,"index1 reached reducers")
                // console.log(addedArray,"addedAry Reached redcuer")
                addedArray[index1].quantity += 1
                const totalAmount= state.discountAmount + addedArray[index1].price2
                console.log(totalAmount,'Got the total sum after adding in redcuer')
                return {
                    ...state,
                    newFoodAry:[...addedArray],
                    discountAmount: state.discountAmount + addedArray[index1].price2,
                    totalAmount:state.totalAmount + addedArray[index1].price1
                }
                case ActionTypes.DECREMENT_CART:
                    const {cartArray2,index2} = action.payload;
                    const discount= state.discountAmount - cartArray2[index2].price2
                    console.log(discount,"got discount in reducer")
                    const less = state.totalAmount- cartArray2[index2].price1
                    console.log(less,"got less price in reducer")

                    if(cartArray2[index2].quantity >= 2){
                    cartArray2[index2].quantity -= 1
                    state.discountAmount = 0
                    }
                    else{
                        showMessage({
                            message:"At lease ONe item Required",
                            icon:"danger",
                            type:"danger"
                        })
                    }
                    return {
                        ...state,
                        newFoodAry:[...cartArray2],
                        discountAmount:state.discountAmount - cartArray2[index2].price2,
                        totalAmount:state.totalAmount - cartArray2[index2].price1
                    }
        
        default:{
            return {
                ...state
            }
        }
           
    }
}