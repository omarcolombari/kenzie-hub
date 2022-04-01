import api from '../../Services/api'
import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const signup = (data, goLogin) => {
        api.post('/users', data)
        .then(res =>{
            toast.success('Conta criada com sucesso!', {
                style:{
                    background: '#343B41',
                    color: 'white'
                }
            })
            goLogin()
        })
        .catch(err => {
            toast.error('Ops! Algo deu errado', {
                style:{
                    background: '#343B41',
                    color: 'white'
                }
            })
        })
    }

    const loadUser = (id) => {
        api.get(`users/${id}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err))
    }

    return (
        <UserContext.Provider value={{loadUser, signup, user}}>
            {children}
        </UserContext.Provider>
    )
}