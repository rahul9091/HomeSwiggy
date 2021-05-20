import { apiPost } from "../../utils/utils"
import {USER_DATA_API} from '../../config/urls'


export function infiniteData (data={}) {
    return new Promise((resolve,reject) => {
        apiPost(USER_DATA_API,data).then((res)=>{
            console.log(res," infinite api data response ")
            resolve(res)
        }).catch((err)=>{
            console.log(err)
            reject(err);
        })
    })
}