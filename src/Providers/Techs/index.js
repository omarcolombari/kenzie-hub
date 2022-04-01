import api from '../../Services/api'
import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const TechsContext = createContext()

export const TechsProvider = ({ children }) => {
    const [techs, setTechs] = useState([])

    const loadTechs = (id) => {
        api.get(`users/${id}`)
        .then((res) => setTechs(res.data.techs))
    }

    const addTech = (token, data) => {
        api.post('/users/techs', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            toast.success('Tecnologia criada com sucesso!',{
                style:{
                    background: '#343B41',
                    color: 'white'
                }
            })
        })
        .catch((err) => {
            toast.error('Ops, algo deu errado!', {
                style:{
                    background: '#343B41',
                    color: 'white'
                }
            })
        })
    }

    const changeTech = (tech_id, token, data) => {
        api.put(`/users/techs/${tech_id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            toast.success('Dados alterados com sucesso!',{
                style:{
                    background: '#343B41',
                    color: 'white'
                }
            })
        })
        .catch((err) => {
            toast.error('Ops, algo deu errado!',{
                style:{
                    background: '#343B41',
                    color: 'white'
                }
            })
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
            toast.success('Tecnologia deletada com sucesso!',{
                style:{
                    background: '#343B41',
                    color: 'white'
                }
            })
        })
        .catch((err) => {
            console.log(err)
            toast.error('Ops, algo deu errado!',{
                style:{
                    background: '#343B41',
                    color: 'white'
                }
            })
        })
    }

    return (
        <TechsContext.Provider value={{ techs, loadTechs, addTech, changeTech, deleteTech }} >
            {children}
        </TechsContext.Provider>
    )

}