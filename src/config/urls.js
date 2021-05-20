const API_BASE_URL = 'https://api.talktier.com';
const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const LOGIN = getApiUrl('/user/v1/loginSignupOtp');
// export const SIGNUP = getApiUrl('/user/registerUser');
// export const UPLOAD_IMAGE = getApiUrl('/common/uploadFile')
export const OTP_VERIFY = getApiUrl('/user/v1/verifyOtp');

export const USER_DATA_API = "https://api.talktier.com/user/v1/getUserSearch"
// export const SEARCH_USER_API = getApiUrl('https://api.talktier.com/user/v1/getUserNearMe');


export const USER_NEAR_ME = getApiUrl('/user/v1/getUserNearMe?name=');