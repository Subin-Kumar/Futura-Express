import axios from 'axios'

const Base_Url="http://localhost:5000/api/"

var Token=JSON.parse(JSON.parse(localStorage.getItem('persist:ClientExpress')).usData).Pass[0] &&
JSON.parse(JSON.parse(localStorage.getItem('persist:ClientExpress')).usData).Pass[0].accesstoken
console.log("Token----",Token);

export const publicRequest=axios.create({baseURL:Base_Url})

export const userRequest=axios.create({
    baseURL:Base_Url,
    headers:{token:`Bearer ${Token}`}
})
