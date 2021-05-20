
import { clearUserData } from '../../utils/utils'
import ActionTypes from '../types'


const initialState={
    userData:{},
    isLoggedin:false
}



export default function counterReducer (state=initialState,action) {
switch(action.type){
    case ActionTypes.LOGIN:{
        const userData=action.payload
        console.log(userData, "we have got userData in redux")
        console.log(isLoggedin,'check isloggedin in reducer')
        return {...state,userData:{...userData},isLoggedin:true}
    }
    case ActionTypes.OTP_VERIFY:{
        const data = action.payload
        console.log(otpData,'otp got by us reducer')
        return {...state,userData:{...data},isLoggedin:true}
    }
    case ActionTypes.ON_LOGOUT:
        clearUserData()
        return {
            ...state,userData:{},isLoggedin:false
        }


    default:
        {
            return {...state}
        }
}
}