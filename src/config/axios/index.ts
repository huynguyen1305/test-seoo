import axios from 'axios'

const BASE_URL = process.env.REACT_BASE_URL || 'http://localhost:3000'
axios.defaults.baseURL = BASE_URL
