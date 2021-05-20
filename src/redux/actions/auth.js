import {apiDelete,apiGet,apiPost,apiPut,setUserData} from '../../utils/utils'
import {LOGIN,OTP_VERIFY} from '../../config/urls'
import store from '../store';
import types from '../types';


const {dispatch} = store

export function login(data={}){
    return new Promise((resolve,reject) => {
        apiPost(LOGIN,data).then(res =>{
            setUserData(res.data).then(suc => {
               console.log(res.data)
               dispatch({
                   type:types.LOGIN,
                   payload:res.data
               })
            })
            resolve(res)
        }).catch(error =>{
            reject(error)
        })
    })
}

export function loginWithOTP(data={}){
    return new Promise((resolve,reject) =>{
        apiPost(LOGIN,data).then(res=>{
            console.log(res , "Login With OTP")
            // dispatch({
            //     type:types.OTP_VERIFY,
            //     payload:res.data
            // })

            resolve(res)
        }).catch(error =>{
            reject(error)
        })
    })
}

export function otpVerify (data={}) {
    return new Promise((resolve,reject) => {
        apiPost(OTP_VERIFY,data).then(res=>{
            console.log(res,"OTp Verify")
            dispatch({
                type:types.OTP_VERIFY,
                payload:res.data
            })
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
export const OnLogout = () => {
    dispatch({
        type:types.ON_LOGOUT
    })
}