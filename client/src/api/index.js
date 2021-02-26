
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8000',
        'Content-Type': 'application/json',

    }

})

export const createAdvice = payload => api.post(`/advice`, payload)
export const getAllAdvice = () => api.get(`/allAdvice`)
export const updateAdviceById = (id, payload) => api.put(`/advice/${id}`, payload)
export const deleteAdviceById = id => api.delete(`/advice/${id}`)
export const getAdviceById = id => api.get(`/advice/${id}`)
export const getAdviceByTag = tag => api.get(`/advice/${tag}`)
const apis = {
    createAdvice,
    getAllAdvice,
    updateAdviceById,
    deleteAdviceById,
    getAdviceById,
    getAdviceByTag,

}

export default apis