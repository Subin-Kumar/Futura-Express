import axios from 'axios'

const Base_Url="http://localhost:5000/api/"


export const publicRequest=axios.create({baseURL:Base_Url})


