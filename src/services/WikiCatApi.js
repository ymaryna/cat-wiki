import axios from "axios";

const httpApi = axios.create({ baseURL: 'http://localhost:3001/', withCredentials: true })

httpApi.interceptors.response.use(
    response => response.data,
    error => {
      if (error.response && error.response.status === 401) {
        console.log(error)
      }
  
      return Promise.reject(error)
    }
)

//API
const search = (data) =>  console.info('search data => ', data) || httpApi.post('/search', data)

export default { search }