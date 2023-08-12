import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 5000,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.e30.3nN7X43TmxWmvmQvUb4vra5iAqcwN7asc5m6Ndh337c'
  }
})

export default axiosInstance
    