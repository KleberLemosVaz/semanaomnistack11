import axios from 'axios'

const api = axios.create({
    baseURL: 'htpp://localhost:3001/users'
})

export default api