import api from '../../Services'
import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const TechsContext = createContext()

export const TechsProvider = ({ children }) => {
    const [techs, setTechs] = useState([])

    const loadTechs = (id) => {
        api.get(`users/${id}`)
        .then((res) => setTechs(res.data.techs))
        .catch((err) => console.log(err))
    }

    const addTech = (token, data) => {
        api.post('/users/techs', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log(res)
            toast.success('Tecnologia criada com sucesso!')
            setTechs([techs, ...res.data])
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
        <TechsContext.Provider value={{ techs, loadTechs, addTech, changeTech, deleteTech }} >
            {children}
        </TechsContext.Provider>
    )

}