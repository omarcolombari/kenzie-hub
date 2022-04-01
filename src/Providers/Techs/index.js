import api from '../../Services'
import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const TechContext = createContext()

export const TechProvider = ({ children }) => {
    const [tech, setTech] = useState([])

    const addTech = (token, data) => {
        api.post('/users/techs', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log(res)
            toast.success('Tecnologia criada com sucesso!')
            setTech([tech, ...data])
        })
        .catch((err) => {
            console.log(err)
            toast.error('Ops, algo deu errado!')
        })
    }

    const changeTech = (tech_id, token, data) => {
        api.put(`/users/techs/${tech_id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log(res)
            toast.success('Dados alterados com sucesso!')
        })
        .catch((err) => {
            console.log(err)
            toast.error('Ops, algo deu errado!')
        })
    }

    const deleteTech = (tech_id, token) => {
        api.delete(`/users/techs/${tech_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log(res)
            toast.success('Tecnologia deletada com sucesso!')
        })
        .catch((err) => {
            console.log(err)
            toast.error('Ops, algo deu errado!')
        })
    }

    return (
        <TechContext.Provider value={{ tech, addTech, changeTech, deleteTech }} >
            {children}
        </TechContext.Provider>
    )

}