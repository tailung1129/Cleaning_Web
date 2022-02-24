import axios from "axios"

axios.defaults.baseURL = "http://localhost:8080";

export async function fnLogin ( postdata ) {
    return await axios.post('/company/login' , postdata)
}

export async function fnRegister ( postdata ) {
    return await axios.post('/company/register' , postdata)
}

export async function fnRequestSave ( postdata ) {
    return await axios.post('/request/save' , postdata)
}