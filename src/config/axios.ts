import axios from "axios";

const axiosUrl =  axios.create({
   baseURL:'http://10.0.0.100:4070'
})

export{axiosUrl}