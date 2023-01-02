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
const search = (data) =>  httpApi.post('/search', data)
const searchImg = (id) => httpApi.get(`/cat-img/${id}`)
const searchImgs = (type) => httpApi.get(`/cat-imgs/${type}`)
const getFavs = () => httpApi.get(`/cat-favs`)

export default { search, searchImg, searchImgs, getFavs }