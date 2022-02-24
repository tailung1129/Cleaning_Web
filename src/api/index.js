import axios from "axios"

axios.defaults.baseURL = "http://localhost:8080";

export async function fnLogin ( postdata ) {
    return await axios.post('/company/login' , postdata)
}